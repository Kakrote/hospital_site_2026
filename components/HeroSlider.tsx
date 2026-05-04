"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  src: string
  alt: string
  mobilePosition: string
}

const fallbackSlides: Slide[] = [
  {
    src: "/images/vercel-backup/home.png",
    alt: "Research & Innovation at Uttaranchal University - 22+ Years of Excellence",
    mobilePosition: "object-[25%_center]",
  },
  {
    src: "/images/vercel-backup/scholarship.jpeg",
    alt: "Scholarships Available Worth ₹69.22 Crore for Academic Year 2025-26",
    mobilePosition: "object-[30%_center]",
  },
  {
    src: "/images/vercel-backup/Slider.jpeg",
    alt: "YUVA FEST 2025 - Unleash the Youth, Unfold the Magic",
    mobilePosition: "object-[center_center]",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState<Slide[]>(fallbackSlides)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("https://uucms.uudoon.in/api/homesliders/?format=json")
        const data = await res.json()

        if (Array.isArray(data) && data.length > 0) {
          const formattedSlides = data.map((item: any) => ({
            src: item.src || "/placeholder.svg",
            alt: item.alt || "Uttaranchal University Slide",
            mobilePosition: "object-[center_center]", // You can update based on actual content
          }))
          setSlides(formattedSlides)
        } else {
          setSlides(fallbackSlides)
        }
      } catch (error) {
        console.error("Failed to load slides from API:", error)
        setSlides(fallbackSlides)
      }
    }

    fetchSlides()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides])

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }


  return (
    <div className="relative w-full overflow-hidden group lg:mt-[calc(6vh-60px)] ">
      <div className="relative  mx-auto">
        <div className="pointer-events-none absolute inset-0 z-20 " />
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0 absolute top-0 left-0"
            } w-full`}
          >
            <div className="relative w-full aspect-[24/8] ">
              <Image
                src={slide.src}
                alt={slide.alt}
              //  width={1920}
              //   height={768}
              fill
                priority={index===0}
                sizes="100vw"
                className={`${slide.mobilePosition}  `}
                quality={90}
                style={{
                  objectPosition: "center center",
                  // transform: "scale(1.05)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 sm:p-3 z-20 opacity-70 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
      </button>

      {/* Right arrow */}
      <button
        onClick={goToNextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 sm:p-3 z-20 opacity-70 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7" />
      </button>
    </div>
  )
}