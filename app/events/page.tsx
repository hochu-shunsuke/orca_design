import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export const metadata: Metadata = {
  title: "イベント一覧 | オルキャリ",
  description: "東海地方の就活イベント情報",
}

export default function EventsPage() {
  // ダミーデータ（実際の関数は別途定義される）
  const events = [
    {
      id: "1",
      title: "合同企業説明会 in 名古屋",
      date: "2025年5月15日",
      time: "13:00〜17:00",
      location: "名古屋国際会議場",
      address: "愛知県名古屋市熱田区熱田西町1-1",
      description: "東海地方の優良企業50社が参加する合同企業説明会です。",
      image: "/placeholder.svg?height=200&width=400",
      category: "合同説明会",
      capacity: "500名",
      fee: "無料",
      organizer: "オルキャリ",
      status: "予約受付中",
      featured: true,
      participatingCompanies: ["テクノ株式会社", "東海商事", "中部産業", "三河デジタル", "東海人材"],
    },
    {
      id: "2",
      title: "IT業界研究セミナー",
      date: "2025年5月20日",
      time: "14:00〜16:00",
      location: "オンライン開催",
      address: "Zoomによるオンライン開催",
      description: "IT業界の最新動向や求められる人材像について解説します。",
      image: "/placeholder.svg?height=200&width=400",
      category: "セミナー",
      capacity: "100名",
      fee: "無料",
      organizer: "オルキャリ",
      status: "予約受付中",
      featured: true,
      participatingCompanies: ["テクノ株式会社", "三河デジタル"],
    },
    {
      id: "3",
      title: "東海地区 理系学生向け就職フェア",
      date: "2025年6月5日",
      time: "10:00〜18:00",
      location: "ポートメッセなごや",
      address: "愛知県名古屋市港区金城ふ頭2-2",
      description: "理系学生向けの就職フェアです。製造業を中心に多数の企業が参加します。",
      image: "/placeholder.svg?height=200&width=400",
      category: "就職フェア",
      capacity: "1000名",
      fee: "無料",
      organizer: "東海就活支援協会",
      status: "予約受付中",
      featured: true,
      participatingCompanies: ["中部産業", "中部研究所", "テクノ株式会社"],
    },
    {
      id: "4",
      title: "ES・面接対策講座",
      date: "2025年6月10日",
      time: "15:00〜17:00",
      location: "名古屋市中小企業振興会館",
      address: "愛知県名古屋市千種区吹上2-6-3",
      description: "エントリーシートの書き方や面接対策について、就活のプロが解説します。",
      image: "/placeholder.svg?height=200&width=400",
      category: "講座",
      capacity: "50名",
      fee: "無料",
      organizer: "オルキャリ",
      status: "予約受付中",
      featured: false,
      participatingCompanies: [],
    },
    {
      id: "5",
      title: "製造業界研究セミナー",
      date: "2025年6月15日",
      time: "13:30〜15:30",
      location: "岐阜市文化センター",
      address: "岐阜県岐阜市金町5-7-2",
      description: "東海地方の主要産業である製造業について、業界研究セミナーを開催します。",
      image: "/placeholder.svg?height=200&width=400",
      category: "セミナー",
      capacity: "80名",
      fee: "無料",
      organizer: "岐阜県就活支援センター",
      status: "予約受付中",
      featured: false,
      participatingCompanies: ["中部産業", "東海商事"],
    },
    {
      id: "6",
      title: "インターンシップフェア",
      date: "2025年6月20日",
      time: "11:00〜16:00",
      location: "アクトシティ浜松",
      address: "静岡県浜松市中区板屋町111-1",
      description: "夏季・冬季インターンシップの募集を行う企業が集まるフェアです。",
      image: "/placeholder.svg?height=200&width=400",
      category: "フェア",
      capacity: "300名",
      fee: "無料",
      organizer: "静岡県インターンシップ推進協会",
      status: "予約受付中",
      featured: false,
      participatingCompanies: ["中部研究所", "三河デジタル", "東海商事"],
    },
  ]

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
                    <Card key={event.id} className="overflow-hidden hover:shadow-md transition-all">
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
                              <Badge className="absolute top-2 right-2 bg-brand-orange">{event.category}</Badge>
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
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">すべてのイベント</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events
                  .filter((event) => !event.featured)
                  .map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-md transition-all">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2 bg-brand-orange">{event.category}</Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2 line-clamp-2">
                            <Link href={`/events/${event.id}`} className="hover:text-brand-orange">
                              {event.title}
                            </Link>
                          </h3>
                          <div className="space-y-1 mb-3">
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
                          </div>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                          <div className="flex justify-between items-center">
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              {event.status}
                            </Badge>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/events/${event.id}`}>詳細を見る</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2 bg-brand-orange">{event.category}</Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        <Link href={`/events/${event.id}`} className="hover:text-brand-orange">
                          {event.title}
                        </Link>
                      </h3>
                      <div className="space-y-1 mb-3">
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
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          {event.status}
                        </Badge>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/events/${event.id}`}>詳細を見る</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="fair" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.category === "合同説明会" || event.category === "就職フェア" || event.category === "フェア")
              .map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2 bg-brand-orange">{event.category}</Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        <Link href={`/events/${event.id}`} className="hover:text-brand-orange">
                          {event.title}
                        </Link>
                      </h3>
                      <div className="space-y-1 mb-3">
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
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          {event.status}
                        </Badge>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/events/${event.id}`}>詳細を見る</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="workshop" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.category === "講座" || event.category === "ワークショップ")
              .map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2 bg-brand-orange">{event.category}</Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        <Link href={`/events/${event.id}`} className="hover:text-brand-orange">
                          {event.title}
                        </Link>
                      </h3>
                      <div className="space-y-1 mb-3">
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
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          {event.status}
                        </Badge>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/events/${event.id}`}>詳細を見る</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
