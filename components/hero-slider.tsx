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

interface HeroSliderProps {
  images: HeroImage[]
  autoplaySpeed?: number
}

export default function HeroSlider({ images, autoplaySpeed = 5000 }: HeroSliderProps) {
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
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{image.title}</h1>
              <p className="text-lg md:text-xl max-w-2xl">{image.subtitle}</p>
              <Button className="mt-8 bg-brand-orange hover:bg-brand-orange/90" size="lg">
                求人を探す
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-10 w-10"
        onClick={goToPrev}
        aria-label="前の画像"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-10 w-10"
        onClick={goToNext}
        aria-label="次の画像"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
