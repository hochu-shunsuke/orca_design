import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AboutTeamMemberProps {
  name: string
  position: string
  bio: string
  image: string
}

export default function AboutTeamMember({ name, position, bio, image }: AboutTeamMemberProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all group">
      <div className="relative h-[300px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <p className="text-white text-sm">{bio}</p>
        </div>
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-brand-orange">{position}</p>
      </CardContent>
    </Card>
  )
}
