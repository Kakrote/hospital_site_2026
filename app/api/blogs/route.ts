import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const maxResults = searchParams.get('max-results') || '6';
    const startIndex = searchParams.get('start-index') || '1';
    
    const bloggerUrl = `https://news.uudoon.in/feeds/posts/default/-/Uttaranchal%20Hospital%20and%20Diagnostic%20Centre%20%28UHDC%29?alt=json&max-results=${maxResults}&start-index=${startIndex}`;
    
    const response = await fetch(bloggerUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Process the data to make it cleaner
    const processedData = {
      posts: []
    };

    if (data.feed && data.feed.entry) {
      processedData.posts = data.feed.entry.map((item: any) => {
        const link = item.link.find((l: any) => l.rel === "alternate")?.href || "";
        const title = item.title.$t;
        const content = item.content?.$t || item.summary?.$t || "";
        const published = new Date(item.published.$t).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });

        // --- Image extraction logic ---
        let image = "";
        const imgMatches = content.match(/<img[^>]+src="([^">]+)"/g);

        if (imgMatches && imgMatches.length > 0) {
          for (let imgTag of imgMatches) {
            const srcMatch = imgTag.match(/src="([^">]+)"/);
            const widthMatch = imgTag.match(/width="(\d+)"/);

            if (srcMatch && srcMatch[1]) {
              const imgSrc = srcMatch[1];
              const imgWidth = widthMatch ? parseInt(widthMatch[1]) : 0;

              if (imgWidth >= 500) {
                image = imgSrc;
                break;
              }
            }
          }

          // fallback to last image in content if none >= 500px
          if (!image) {
            const lastImgMatch = imgMatches[imgMatches.length - 1].match(
              /src="([^">]+)"/
            );
            if (lastImgMatch && lastImgMatch[1]) image = lastImgMatch[1];
          }
        }

        // fallback to media$thumbnail
        if (!image && item.media$thumbnail) {
          image = item.media$thumbnail.url;
        }

        // Clean content by removing HTML tags for preview
        const cleanContent = content.replace(/<[^>]*>/g, '').trim();

        return {
          id: item.id.$t,
          title,
          link,
          image,
          content: cleanContent,
          published,
          author: 'UU Team'
        };
      });
    }

    return NextResponse.json(processedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
