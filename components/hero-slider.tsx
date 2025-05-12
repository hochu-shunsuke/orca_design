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
  blur?: boolean // 個別の画像にぼかし効果を適用するかどうかのフラグ
}

interface HeroSliderProps {
  images: HeroImage[]
  autoplaySpeed?: number
  enableBlur?: boolean // スライダー全体のぼかし効果を制御するフラグ
}

export default function HeroSlider({ images, autoplaySpeed = 5000, enableBlur = false }: HeroSliderProps) {
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
    <div className="relative w-full bg-white">
      {/* スライダーコンテナ - 他のコンポーネントと同じ余白を持たせる */}
      <div className="container mx-auto relative w-full aspect-[21/9] md:aspect-[21/9] lg:aspect-[21/9]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                priority={index === 0}
                className={`object-cover ${enableBlur && image.blur ? "filter blur-[2px]" : ""}`}
              />
              {/* オーバーレイグラデーション - ぼかし設定に応じて適用 */}
              {enableBlur && image.blur && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
              )}

              {/* コンテンツコンテナ - レスポンシブに配置調整 */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 lg:p-16">
                <div className="max-w-xl">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-white leading-tight">
                    {image.title}
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-6 max-w-md">
                    {image.subtitle}
                  </p>
                  <Button className="bg-brand-orange hover:bg-brand-orange/90 text-sm md:text-base" size="sm">
                    求人を探す
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ナビゲーションボタン */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full h-8 w-8 md:h-10 md:w-10 shadow-md z-10 opacity-70 hover:opacity-100 transition-opacity"
          onClick={goToPrev}
          aria-label="前の画像"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full h-8 w-8 md:h-10 md:w-10 shadow-md z-10 opacity-70 hover:opacity-100 transition-opacity"
          onClick={goToNext}
          aria-label="次の画像"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        {/* インジケーター */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-100" : "bg-white/50 scale-75 hover:scale-90 hover:bg-white/70"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`画像 ${index + 1} に移動`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
