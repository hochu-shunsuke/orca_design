import Image from "next/image"
import Link from "next/link"
import { MapPin, Building, Banknote, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface JobCardProps {
  id: string
  title: string
  company: string
  location: string
  salary: string
  tags: string[]
  logo: string
}

export default function JobCard({ id, title, company, location, salary, tags, logo }: JobCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
              <Image src={logo || "/placeholder.svg"} alt={company} fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold text-lg line-clamp-2">
                <Link href={`/jobs/${id}`} className="hover:text-brand-orange">
                  {title}
                </Link>
              </h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Building className="mr-1 h-3.5 w-3.5" />
                <span>{company}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Banknote className="mr-1 h-3.5 w-3.5" />
                <span>{salary}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" aria-label="お気に入りに追加">
              <BookmarkPlus className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex w-full justify-between gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link href={`/companies/${company}`}>企業詳細</Link>
          </Button>
          <Button size="sm" className="flex-1 bg-brand-orange hover:bg-brand-orange/90" asChild>
            <Link href={`/jobs/${id}`}>詳細を見る</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
