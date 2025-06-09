import type { Metadata } from "next"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import InternshipCard from "@/components/internship-card"
import InternshipFilter from "@/components/internship-filter"

import { internships } from "@/mock-data/internships/data"

export const metadata: Metadata = {
  title: "長期インターンシップ | オルキャリ",
  description:
    "東海地方の企業が提供する長期インターンシップ情報を探せます。実務経験を積んでキャリアをスタートしましょう。",
}

export default function InternshipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">インターンシップ</h1>

      {/* 検索セクション */}
      <div className="bg-brand-lightgray rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="internKeyword" className="block text-sm font-medium">
              キーワード
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="internKeyword" placeholder="職種、会社名、スキルなど" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="internArea" className="block text-sm font-medium">
              エリア
            </label>
            <select
              id="internArea"
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
            <label htmlFor="internField" className="block text-sm font-medium">
              職種
            </label>
            <select
              id="internField"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">職種を選択</option>
              <option value="engineer">エンジニア</option>
              <option value="marketing">マーケティング</option>
              <option value="sales">営業</option>
              <option value="design">デザイン</option>
              <option value="planning">企画</option>
              <option value="research">研究開発</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button className="bg-brand-orange hover:bg-brand-orange/90">検索</Button>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 space-y-6">
          <InternshipFilter />
        </div>

        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">すべて</TabsTrigger>
                <TabsTrigger value="27">27卒向け</TabsTrigger>
                <TabsTrigger value="28">28卒向け</TabsTrigger>
                <TabsTrigger value="29">29卒向け</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <span className="text-sm">並び替え:</span>
              <select className="text-sm border rounded p-1">
                <option>新着順</option>
                <option>人気順</option>
                <option>給与高い順</option>
              </select>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">全24件中 1-6件を表示</p>
          <div className="space-y-4">
            {internships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>

          {/* ページネーション */}
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

      {/* インターンシップ情報 */}
      <div className="mt-16 bg-brand-lightgray rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">長期インターンシップについて</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">インターンシップのメリット</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>実務経験を積むことができる</li>
              <li>業界・職種への理解が深まる</li>
              <li>社会人としてのスキルが身につく</li>
              <li>就活時に自己PRの材料になる</li>
              <li>本採用へのルートになる可能性がある</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">応募時の注意点</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>大学の授業との両立を考慮する</li>
              <li>交通費や給与条件を確認する</li>
              <li>インターン期間と自分の予定を照らし合わせる</li>
              <li>本採用の可能性について確認する</li>
              <li>学業に支障が出ないよう注意する</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
            <Link href="/internships/guide">インターンシップガイドを見る</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
