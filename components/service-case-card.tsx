import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCaseCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCaseCard({ icon, title, description }: ServiceCaseCardProps) {
  return (
    <Card className="border-2">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="relative h-16 w-16 mb-4">
            <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-contain" />
          </div>
          <h3 className="font-bold text-center mb-4">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
