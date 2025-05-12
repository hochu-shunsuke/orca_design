"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroImage {
  src: string
  alt: string
  title: string
  subtitle: string
}

interface AboutHeroSliderProps {
  images: HeroImage[]
  autoplaySpeed?: number
}

export default function AboutHeroSlider({ images, autoplaySpeed = 5000 }: AboutHeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNext = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [images.length, isTransitioning])

  const goToPrev = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [images.length, isTransitioning])

  useEffect(() => {
    const interval = setInterval(goToNext, autoplaySpeed)
    return () => clearInterval(interval)
  }, [goToNext, autoplaySpeed])

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">{image.title}</h1>
              <p className="text-xl md:text-2xl max-w-2xl">{image.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full h-12 w-12 z-10"
        onClick={goToPrev}
        aria-label="前の画像"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full h-12 w-12 z-10"
        onClick={goToNext}
        aria-label="次の画像"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`画像 ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  )
}
