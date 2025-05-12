import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AboutMissionCardProps {
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
}

export default function AboutMissionCard({ title, subtitle, description, icon, color }: AboutMissionCardProps) {
  return (
    <Card className="border-2 overflow-hidden transition-all hover:shadow-lg group">
      <div className={`h-2 ${color}`}></div>
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div
            className={`relative h-20 w-20 rounded-full ${color} p-4 mb-6 group-hover:scale-110 transition-transform`}
          >
            <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-contain p-2" />
          </div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-muted-foreground mb-4">{subtitle}</p>
          <p className="text-lg">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
