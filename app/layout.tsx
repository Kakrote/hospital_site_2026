import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CommonLayout from "@/components/commonLayout";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = localFont({
  variable: "--font-figtree",
  src: [
    { path: "../font/Figtree-Regular.ttf", weight: "400", style: "normal" },
    { path: "../font/Figtree-Bold.ttf", weight: "700", style: "normal" },
    { path: "../font/Figtree-Black.ttf", weight: "900", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uhdc.in"),
  title: {
    default: "Uttaranchal Hospital and Diagnostic Centre (UHDC) | Best Hospital in Dehradun",
    template: "%s | UHDC Dehradun",
  },
  description: "Uttaranchal Hospital & Diagnostic Centre (UHDC), Dehradun, is a 300-bedded multi-specialty hospital committed to delivering excellence in patient-centered healthcare.",
  keywords: ["Hospital in Dehradun", "UHDC", "Uttaranchal Hospital", "Diagnostic Centre Dehradun", "Best Hospital Uttarakhand", "Multi-specialty Hospital"],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "UHDC" }],
  creator: "UHDC",
  publisher: "UHDC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uhdc.in",
    siteName: "Uttaranchal Hospital and Diagnostic Centre",
    title: "Uttaranchal Hospital and Diagnostic Centre (UHDC)",
    description: "300-bedded multi-specialty hospital in Dehradun providing advanced, patient-centered healthcare.",
    images: [
      {
        url: "/assets/images/h1.jpg",
        width: 1200,
        height: 630,
        alt: "Uttaranchal Hospital and Diagnostic Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttaranchal Hospital and Diagnostic Centre (UHDC)",
    description: "300-bedded multi-specialty hospital in Dehradun providing advanced, patient-centered healthcare.",
    images: ["/assets/images/h1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} h-full antialiased`}
    >
        <body className="min-h-full bg-slate-50 font-figtree">
      <SmoothScroll>
          <CommonLayout>{children}</CommonLayout>
      </SmoothScroll>
        </body>
    </html>
  );
}
