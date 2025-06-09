import Image from "next/image"
import Link from "next/link"
import { MapPin, Building, Clock, Calendar, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import GraduationYearBadge from "@/components/graduation-year-badge"

interface Internship {
  id: string
  title: string
  company: string
  location: string
  workStyle: string
  period: string
  workDays: string
  salary: string
  description: string
  tags: string[]
  graduationYears: string[]
  logo: string
  publishedAt: string
}

interface InternshipCardProps {
  internship: Internship
}

export default function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-6 flex flex-col items-center justify-center bg-muted/30">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border mb-2">
              <Image
                src={internship.logo || "/placeholder.svg"}
                alt={internship.company}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-medium text-center">{internship.company}</h3>
          </div>
          <div className="md:w-3/4 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <h3 className="font-semibold text-lg">
                <Link href={`/internships/${internship.id}`} className="hover:text-brand-orange">
                  {internship.title}
                </Link>
              </h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>掲載日: {internship.publishedAt}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                <span>{internship.location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Building className="mr-1 h-3.5 w-3.5" />
                <span>{internship.workStyle}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                <span>{internship.period}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3.5 w-3.5" />
                <span>{internship.workDays}</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{internship.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {internship.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
              {internship.graduationYears.map((year) => (
                <GraduationYearBadge key={year} year={year} />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">
                <span className="text-brand-orange">{internship.salary}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="gap-1">
                  <BookmarkPlus className="h-4 w-4" />
                  <span>お気に入り</span>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/companies/${internship.company}`}>企業詳細</Link>
                </Button>
                <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href={`/internships/${internship.id}`}>詳細を見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
