"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  link: string;
  image: string;
  content: string;
  published: string;
  author: string;
}

interface BlogApiResponse {
  posts: BlogPost[];
  error?: string;
  message?: string;
}

export default function BloggerPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const blogsRef = useRef<HTMLDivElement>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/blogs?max-results=6&start-index=1');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: BlogApiResponse = await response.json();
      
      if (data.error) {
        throw new Error(data.message || data.error);
      }
      
      setPosts(data.posts || []);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching blog posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Update visible posts based on screen size
  const updateVisiblePosts = () => {
    if (window.innerWidth < 768) {
      setVisiblePosts(1);
    } else if (window.innerWidth < 1024) {
      setVisiblePosts(2);
    } else {
      setVisiblePosts(3);
    }
  };

  useEffect(() => {
    updateVisiblePosts();
    window.addEventListener("resize", updateVisiblePosts);
    return () => window.removeEventListener("resize", updateVisiblePosts);
  }, []);

  const maxIndex = Math.max(posts.length - visiblePosts, 0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  // Clamp index when layout/data changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Autoplay: advance every 5s, loop, pause on hover
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused, maxIndex]);

  if (loading) {
    return (
      <section className="py-16 bg-white font-figtree">
        <div className="container mx-auto px-4">
          <p className="text-center py-16">Loading blog posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white font-figtree">
        <div className="container mx-auto px-4">
          <div className="text-center p-8">
            <div className="text-red-600 mb-4">Error loading blog posts: {error}</div>
            <button 
              onClick={fetchPosts}
              disabled={loading}
              className="px-6 py-2 bg-[#6bc533] text-white rounded-full hover:bg-[#5aa428] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Retrying...' : 'Try Again'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white font-figtree">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="mb-10 flex justify-center items-center flex-col">
          <h2 className="text-4xl md:text-6xl font-bold text-[#6bc533]">Uttaranchal University</h2>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1d5ed6]">Hospital & Diagnostic Centre</h2>
        </div>

        {posts.length === 0 ? (
          <div className="text-center p-8 text-gray-600">
            No blog posts available at the moment.
          </div>
        ) : (
          <>
            {/* News carousel */}
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div ref={blogsRef} className="overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / visiblePosts)}%)` }}
                >
                  {posts.map((post) => (
                    <div key={post.id} className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
                      <div className="bg-white rounded-lg overflow-hidden border border-gray-100 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
                        {/* Blog image */}
                        {post.image && (
                          <div className="relative h-56 w-full">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}

                        {/* Blog content */}
                        <div className="p-6 flex flex-col grow">
                          <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                            <span>{post.author || "UU Team"}</span>
                            <span>{post.published}</span>
                          </div>
                          <h3 className="font-bold text-[#2A2A2F] mb-2 line-clamp-2">{post.title}</h3>
                          <p className="text-gray-700 mb-6 grow line-clamp-3">
                            {post.content.substring(0, 150)}
                            {post.content.length > 150 && '...'}
                          </p>
                          <Link
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#6bc533] text-white px-6 py-2 rounded-full hover:bg-[#5aa428] transition-colors self-start mt-auto"
                          >
                            Read More <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              {/* Pagination dots */}
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index ? "bg-[#6bc533] ring-2 ring-[#6bc533]/30" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className={`bg-white rounded-full p-2 shadow-md ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
                  }`}
                  aria-label="Previous news posts"
                >
                  <ChevronLeft className="h-6 w-6 text-[#453CD5]" />
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentIndex >= maxIndex}
                  className={`bg-white rounded-full p-2 shadow-md ${
                    currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
                  }`}
                  aria-label="Next news posts"
                >
                  <ChevronRight className="h-6 w-6 text-[#453CD5]" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}