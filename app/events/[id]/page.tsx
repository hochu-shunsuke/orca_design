import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, Users, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "イベント詳細 | オルキャリ",
  description: "東海地方の就活イベント情報",
}

import { event, relatedEvents } from "@/mock-data/events/data";

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-brand-orange">
          ホーム
        </Link>
        <span>/</span>
        <Link href="/events" className="hover:text-brand-orange">
          イベント一覧
        </Link>
        <span>/</span>
        <span>イベント詳細</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative">
            <Badge className="absolute top-4 left-4 bg-brand-orange">{event.category}</Badge>
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center justify-center p-4 bg-brand-lightgray rounded-lg">
                <Calendar className="h-6 w-6 text-brand-orange mb-2" />
                <span className="text-sm font-medium">{event.date}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-brand-lightgray rounded-lg">
                <Clock className="h-6 w-6 text-brand-orange mb-2" />
                <span className="text-sm font-medium">{event.time}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-brand-lightgray rounded-lg">
                <MapPin className="h-6 w-6 text-brand-orange mb-2" />
                <span className="text-sm font-medium">{event.location}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-brand-lightgray rounded-lg">
                <Users className="h-6 w-6 text-brand-orange mb-2" />
                <span className="text-sm font-medium">定員: {event.capacity}</span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>イベント詳細</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">概要</TabsTrigger>
                  <TabsTrigger value="companies">参加企業</TabsTrigger>
                  <TabsTrigger value="access">アクセス</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4 pt-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: event.detailedDescription }}
                    className="space-y-4 text-muted-foreground"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">開催日時</h3>
                      <p className="text-muted-foreground">
                        {event.date} {event.time}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">会場</h3>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">定員</h3>
                      <p className="text-muted-foreground">{event.capacity}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">参加費</h3>
                      <p className="text-muted-foreground">{event.fee}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">主催</h3>
                      <p className="text-muted-foreground">{event.organizer}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">ステータス</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="companies" className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.participatingCompanies.map((company) => (
                      <Card key={company.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
                              <Image
                                src={company.logo || "/placeholder.svg"}
                                alt={company.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                <Link href={`/companies/${company.id}`} className="hover:text-brand-orange">
                                  {company.name}
                                </Link>
                              </h4>
                              <p className="text-sm text-muted-foreground">{company.industry}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      ※参加企業は変更になる場合があります。最新情報は随時更新します。
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="access" className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">会場</h3>
                      <p className="text-muted-foreground">{event.location}</p>
                      <p className="text-muted-foreground">{event.address}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">アクセス</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>地下鉄名城線「西高蔵駅」から徒歩5分</li>
                        <li>JR・名鉄・近鉄「金山駅」からバスで10分</li>
                        <li>名古屋高速道路「熱田南IC」から車で5分</li>
                      </ul>
                    </div>

                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-muted-foreground">地図が表示されます</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>イベント予約</CardTitle>
              <CardDescription>以下のフォームから予約してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">開催日時</span>
                  <span className="text-muted-foreground">{event.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">時間</span>
                  <span className="text-muted-foreground">{event.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">会場</span>
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">参加費</span>
                  <span className="text-muted-foreground">{event.fee}</span>
                </div>
              </div>

              <div className="flex items-center p-3 bg-yellow-50 rounded-md border border-yellow-200">
                <Info className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
                <p className="text-sm text-yellow-700">
                  予約には会員登録が必要です。ログインしていない場合は、予約時にログイン画面に移動します。
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">このイベントを予約する</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>関連イベント</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatedEvents.map((relatedEvent) => (
                  <Link key={relatedEvent.id} href={`/events/${relatedEvent.id}`}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={relatedEvent.image || "/placeholder.svg"}
                          alt={relatedEvent.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{relatedEvent.title}</h3>
                        <p className="text-xs text-muted-foreground">{relatedEvent.date}</p>
                        <p className="text-xs text-muted-foreground">{relatedEvent.location}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-medium">主催者</h3>
                  <p className="text-sm text-muted-foreground">{event.organizer}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">連絡先</h3>
                  <p className="text-sm text-muted-foreground">TEL: 052-123-4567</p>
                  <p className="text-sm text-muted-foreground">Email: event@olcareer.jp</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    お問い合わせフォーム
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
