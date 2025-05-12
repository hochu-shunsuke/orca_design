"use client"

import { AlertCircle, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

type NotificationType = "alert" | "info"

interface NotificationBannerProps {
  type: NotificationType
  title: string
  message: string
  dismissible?: boolean
}

export default function NotificationBanner({
  type = "info",
  title,
  message,
  dismissible = true,
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div
      className={`w-full ${
        type === "alert" ? "bg-red-500" : "bg-brand-orange"
      } text-white py-2 px-4 md:px-6 min-h-[60px] flex items-center`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {type === "alert" ? (
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
          ) : (
            <Info className="h-5 w-5 flex-shrink-0" />
          )}
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-sm text-white/90">{message}</p>
          </div>
        </div>
        {dismissible && (
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsVisible(false)}
            aria-label="通知を閉じる"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
