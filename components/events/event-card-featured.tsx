import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: string
  capacity: string
  status: string
}

interface EventCardFeaturedProps {
  event: Event
}

export default function EventCardFeatured({ event }: EventCardFeaturedProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <div className="relative h-48 md:h-full w-full">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-brand-orange">
                {event.category}
              </Badge>
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="font-bold text-xl mb-3">
              <Link href={`/events/${event.id}`} className="hover:text-brand-orange">
                {event.title}
              </Link>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>定員: {event.capacity}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="bg-green-100 text-green-800">
                {event.status}
              </Badge>
              <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                <Link href={`/events/${event.id}`}>詳細を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}