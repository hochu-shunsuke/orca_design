import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Building, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const metadata: Metadata = {
  title: "企業一覧 | オルキャリ",
  description: "東海地方の企業情報を検索",
}

export default function CompaniesPage() {
  // ダミーデータ（実際の関数は別途定義される）
  const companies = [
    {
      id: "1",
      name: "テクノ株式会社",
      industry: "IT・通信",
      location: "名古屋市中区",
      description: "Webアプリケーション開発、システム開発、ITコンサルティング",
      employeeCount: "120名",
      logo: "/placeholder.svg?height=120&width=120",
      coverImage: "/placeholder.svg?height=200&width=400",
      jobCount: 3,
    },
    {
      id: "2",
      name: "東海商事",
      industry: "商社",
      location: "静岡市葵区",
      description: "自動車部品、電子部品の輸出入および販売",
      employeeCount: "250名",
      logo: "/placeholder.svg?height=120&width=120",
      coverImage: "/placeholder.svg?height=200&width=400",
      jobCount: 2,
    },
    {
      id: "3",
      name: "中部産業",
      industry: "製造業",
      location: "岐阜市",
      description: "自動車部品、精密機械部品の製造",
      employeeCount: "450名",
      logo: "/placeholder.svg?height=120&width=120",
      coverImage: "/placeholder.svg?height=200&width=400",
      jobCount: 4,
    },
    {
      id: "4",
      name: "三河デジタル",
      industry: "IT・通信",
      location: "豊橋市",
      description: "デジタルマーケティング、Webサイト制作",
      employeeCount: "80名",
      logo: "/placeholder.svg?height=120&width=120",
      coverImage: "/placeholder.svg?height=200&width=400",
      jobCount: 2,
    },
    {
      id: "5",
      name: "東海人材",
      industry: "人材サービス",
      location: "名古屋市中村区",
      description: "人材紹介、人材派遣、採用コンサルティング",
      employeeCount: "150名",
      logo: "/placeholder.svg?height=120&width=120",
      coverImage: "/placeholder.svg?height=200&width=400",
      jobCount: 1,
    },
    {
      id: "6",
      name: "中部研究所",
      industry: "研究・開発",
      location: "浜松市中区",
      description: "材料研究、製品開発、技術コンサルティング",
      employeeCount: "90名",
      logo: "/placeholder.svg?height=120&width=120",
      coverImage: "/placeholder.svg?height=200&width=400",
      jobCount: 2,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">企業一覧</h1>

      <div className="bg-brand-lightgray rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="companyKeyword" className="block text-sm font-medium">
              キーワード
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="companyKeyword" placeholder="企業名、業種など" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="companyArea" className="block text-sm font-medium">
              エリア
            </label>
            <select
              id="companyArea"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">エリアを選択</option>
              <option value="aichi">愛知県</option>
              <option value="gifu">岐阜県</option>
              <option value="mie">三重県</option>
              <option value="shizuoka">静岡県</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="companyIndustry" className="block text-sm font-medium">
              業種
            </label>
            <select
              id="companyIndustry"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">業種を選択</option>
              <option value="it">IT・通信</option>
              <option value="manufacturing">製造業</option>
              <option value="finance">金融・保険</option>
              <option value="retail">小売・流通</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button className="bg-brand-orange hover:bg-brand-orange/90">検索</Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">全98社中 1-6社を表示</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">並び替え:</span>
          <select className="text-sm border rounded p-1">
            <option>新着順</option>
            <option>企業名順</option>
            <option>従業員数順</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {companies.map((company) => (
          <Card key={company.id} className="overflow-hidden hover:shadow-md transition-all">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <div className="relative h-48 md:h-full w-full">
                    <Image
                      src={company.coverImage || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                    <h3 className="font-bold text-lg text-white">{company.name}</h3>
                    <p className="text-sm text-white/90">{company.industry}</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">
                        <Link href={`/companies/${company.id}`} className="hover:text-brand-orange">
                          {company.name}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3.5 w-3.5" />
                          <span>{company.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="mr-1 h-3.5 w-3.5" />
                          <span>{company.industry}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-3.5 w-3.5" />
                          <span>{company.employeeCount}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{company.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          求人数: <span className="text-brand-orange">{company.jobCount}</span>件
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/companies/${company.id}`}>企業詳細</Link>
                          </Button>
                          <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                            <Link href={`/companies/${company.id}/jobs`}>求人を見る</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
