import type { Metadata } from "next"
import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import EventCardFeatured from "@/components/events/event-card-featured"
import EventCardNormal from "@/components/events/event-card-normal"

export const metadata: Metadata = {
  title: "イベント一覧 | オルキャリ",
  description: "東海地方の就活イベント情報",
}

import { events } from "@/mock-data/events/data";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">イベント一覧</h1>

      <div className="bg-brand-lightgray rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="eventKeyword" className="block text-sm font-medium">
              キーワード
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="eventKeyword" placeholder="イベント名、企業名など" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="eventCategory" className="block text-sm font-medium">
              カテゴリー
            </label>
            <select
              id="eventCategory"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">すべてのカテゴリー</option>
              <option value="seminar">セミナー</option>
              <option value="fair">合同説明会・フェア</option>
              <option value="workshop">ワークショップ</option>
              <option value="lecture">講座</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="eventDate" className="block text-sm font-medium">
              開催日
            </label>
            <input
              id="eventDate"
              type="date"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button className="bg-brand-orange hover:bg-brand-orange/90">検索</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">すべて</TabsTrigger>
          <TabsTrigger value="seminar">セミナー</TabsTrigger>
          <TabsTrigger value="fair">説明会・フェア</TabsTrigger>
          <TabsTrigger value="workshop">ワークショップ・講座</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="pt-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">注目のイベント</h2>
              <div className="space-y-6">
                {events
                  .filter((event) => event.featured)
                  .map((event) => (
                    <EventCardFeatured key={event.id} event={event} />
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">すべてのイベント</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events
                  .filter((event) => !event.featured)
                  .map((event) => (
                    <EventCardNormal key={event.id} event={event} />
                  ))}
              </div>
            </div>
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
        </TabsContent>

        <TabsContent value="seminar" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.category === "セミナー")
              .map((event) => (
                <EventCardNormal key={event.id} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="fair" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.category === "合同説明会" || event.category === "就職フェア" || event.category === "フェア")
              .map((event) => (
                <EventCardNormal key={event.id} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="workshop" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.category === "講座" || event.category === "ワークショップ")
              .map((event) => (
                <EventCardNormal key={event.id} event={event} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-brand-lightgray rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-4">イベントカレンダー</h2>
        <p className="mb-6">今後開催予定のすべてのイベントをカレンダーで確認できます。</p>
        <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
          <Link href="/events/calendar">イベントカレンダーを見る</Link>
        </Button>
      </div>
    </div>
  )
}
