import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Building, Banknote, BookmarkPlus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  title: "求人検索 | オルキャリ",
  description: "東海地方の新卒向け求人情報を検索",
}

import { jobs } from "@/mock-data/jobs/data";

export default function JobsPage() {
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">求人検索</h1>

      <div className="bg-brand-lightgray rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="jobKeyword" className="block text-sm font-medium">
              キーワード
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="jobKeyword" placeholder="職種、会社名、スキルなど" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="jobArea" className="block text-sm font-medium">
              エリア
            </label>
            <select
              id="jobArea"
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
            <label htmlFor="jobIndustry" className="block text-sm font-medium">
              業種・職種
            </label>
            <select
              id="jobIndustry"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">業種・職種を選択</option>
              <option value="it">IT・通信</option>
              <option value="manufacturing">製造業</option>
              <option value="sales">営業</option>
              <option value="marketing">マーケティング</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button className="bg-brand-orange hover:bg-brand-orange/90">検索</Button>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">絞り込み条件</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">エリア</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="area-aichi" className="mr-2" />
                    <label htmlFor="area-aichi" className="text-sm">
                      愛知県
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="area-gifu" className="mr-2" />
                    <label htmlFor="area-gifu" className="text-sm">
                      岐阜県
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="area-mie" className="mr-2" />
                    <label htmlFor="area-mie" className="text-sm">
                      三重県
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="area-shizuoka" className="mr-2" />
                    <label htmlFor="area-shizuoka" className="text-sm">
                      静岡県
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">業種</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="industry-it" className="mr-2" />
                    <label htmlFor="industry-it" className="text-sm">
                      IT・通信
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="industry-manufacturing" className="mr-2" />
                    <label htmlFor="industry-manufacturing" className="text-sm">
                      製造業
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="industry-finance" className="mr-2" />
                    <label htmlFor="industry-finance" className="text-sm">
                      金融・保険
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="industry-retail" className="mr-2" />
                    <label htmlFor="industry-retail" className="text-sm">
                      小売・流通
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">職種</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="job-engineer" className="mr-2" />
                    <label htmlFor="job-engineer" className="text-sm">
                      エンジニア
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="job-sales" className="mr-2" />
                    <label htmlFor="job-sales" className="text-sm">
                      営業
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="job-marketing" className="mr-2" />
                    <label htmlFor="job-marketing" className="text-sm">
                      マーケティング
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="job-hr" className="mr-2" />
                    <label htmlFor="job-hr" className="text-sm">
                      人事・総務
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">条件を適用</Button>
              <Button variant="outline" className="w-full">
                条件をリセット
              </Button>
            </div>
          </div>
        </div>

        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">全123件中 1-6件を表示</p>
            <div className="flex items-center gap-2">
              <span className="text-sm">並び替え:</span>
              <select className="text-sm border rounded p-1">
                <option>新着順</option>
                <option>人気順</option>
                <option>給与高い順</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-6 flex flex-col items-center justify-center bg-muted/30">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border mb-2">
                        <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
                      </div>
                      <h3 className="font-medium text-center">{job.company}</h3>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h3 className="font-semibold text-lg">
                          <Link href={`/jobs/${job.id}`} className="hover:text-brand-orange">
                            {job.title}
                          </Link>
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>掲載日: {job.publishedAt}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3.5 w-3.5" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="mr-1 h-3.5 w-3.5" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Banknote className="mr-1 h-3.5 w-3.5" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <BookmarkPlus className="h-4 w-4" />
                          <span>お気に入り</span>
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/companies/${job.company}`}>企業詳細</Link>
                          </Button>
                          <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                            <Link href={`/jobs/${job.id}`}>詳細を見る</Link>
                          </Button>
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
      </div>
    </div>
  )
}
