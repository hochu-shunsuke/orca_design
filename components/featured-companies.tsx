import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedCompanies() {
  // ダミーデータ（実際の関数は別途定義される）
  const companies = [
    {
      id: "1",
      name: "テクノ株式会社",
      industry: "IT・通信",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "東海商事",
      industry: "商社",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "3",
      name: "中部産業",
      industry: "製造業",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "4",
      name: "三河デジタル",
      industry: "IT・通信",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "5",
      name: "東海人材",
      industry: "人材サービス",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">注目の企業</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {companies.map((company) => (
          <Card key={company.id} className="overflow-hidden hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="relative h-16 w-16 mb-4">
                <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-contain" />
              </div>
              <h3 className="font-medium text-sm mb-1">{company.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{company.industry}</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={`/companies/${company.id}`}>詳細</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/companies">すべての企業を見る</Link>
        </Button>
      </div>
    </section>
  )
}
