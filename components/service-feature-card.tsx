import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ServiceFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceFeatureCard({ icon, title, description }: ServiceFeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-100 p-6 flex items-center justify-center md:w-1/4">
            <div className="text-brand-gray">{icon}</div>
          </div>
          <div className="p-6 md:w-3/4">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
