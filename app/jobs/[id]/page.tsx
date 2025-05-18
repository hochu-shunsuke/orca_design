import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Building, MapPin, Banknote, Calendar, Clock, BookmarkPlus, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "求人詳細 | オルキャリ",
  description: "東海地方の新卒向け求人情報",
}

import { job, relatedJobs } from "@/mock-data/jobs/data"

export default function JobDetailPage({ params }: { params: { id: string } }) {


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/jobs" className="hover:text-primary">
              求人検索
            </Link>
            <span>/</span>
            <span>求人詳細</span>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border">
                  <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Building className="mr-1 h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Banknote className="mr-1 h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6 border-t pt-6">
                <Button className="flex-1">応募する</Button>
                <Button variant="outline" className="flex-1">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  お気に入り
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>募集要項</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">詳細情報</TabsTrigger>
                  <TabsTrigger value="company">企業情報</TabsTrigger>
                  <TabsTrigger value="application">応募方法</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-medium mb-2">仕事内容</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{job.description}</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">応募資格</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{job.requirements}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">勤務時間</h3>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <p className="text-muted-foreground">{job.workHours}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">休日・休暇</h3>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <p className="text-muted-foreground">{job.holidays}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">福利厚生</h3>
                    <p className="text-muted-foreground">{job.benefits}</p>
                  </div>
                </TabsContent>

                <TabsContent value="company" className="space-y-6 pt-4">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={job.companyImage || "/placeholder.svg"}
                      alt={job.company}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">企業概要</h3>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 border-b pb-2">
                        <span className="font-medium">会社名</span>
                        <span className="col-span-2">{job.company}</span>
                      </div>
                      <div className="grid grid-cols-3 border-b pb-2">
                        <span className="font-medium">所在地</span>
                        <span className="col-span-2">{job.location}</span>
                      </div>
                      <div className="grid grid-cols-3 border-b pb-2">
                        <span className="font-medium">事業内容</span>
                        <span className="col-span-2">Webアプリケーション開発、システム開発、ITコンサルティング</span>
                      </div>
                      <div className="grid grid-cols-3 border-b pb-2">
                        <span className="font-medium">設立</span>
                        <span className="col-span-2">2005年4月</span>
                      </div>
                      <div className="grid grid-cols-3 border-b pb-2">
                        <span className="font-medium">従業員数</span>
                        <span className="col-span-2">120名（2024年4月現在）</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" asChild>
                      <Link href={`/companies/${job.company}`}>企業詳細ページへ</Link>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="application" className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">応募締切</h3>
                      <p className="text-muted-foreground">{job.applicationDeadline}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">入社予定日</h3>
                      <p className="text-muted-foreground">{job.startDate}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">選考フロー</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>エントリー</li>
                      <li>書類選考</li>
                      <li>一次面接</li>
                      <li>二次面接</li>
                      <li>最終面接</li>
                      <li>内定</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">応募方法</h3>
                    <p className="text-muted-foreground mb-4">
                      下記の「応募する」ボタンから応募フォームにお進みください。
                    </p>
                    <Button className="w-full sm:w-auto">応募する</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">関連求人</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatedJobs.map((relatedJob) => (
                  <Link key={relatedJob.id} href={`/jobs/${relatedJob.id}`}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={relatedJob.logo || "/placeholder.svg"}
                          alt={relatedJob.company}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{relatedJob.title}</h3>
                        <p className="text-xs text-muted-foreground">{relatedJob.company}</p>
                        <p className="text-xs text-muted-foreground">{relatedJob.location}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">就活イベント</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-3">
                  <h3 className="font-medium text-sm mb-1">合同企業説明会 in 名古屋</h3>
                  <p className="text-xs text-muted-foreground mb-2">2025年5月15日 13:00〜17:00</p>
                  <p className="text-xs text-muted-foreground mb-3">名古屋国際会議場</p>
                  <Button variant="outline" size="sm" className="w-full">
                    詳細を見る
                  </Button>
                </div>

                <div className="border rounded-lg p-3">
                  <h3 className="font-medium text-sm mb-1">IT業界研究セミナー</h3>
                  <p className="text-xs text-muted-foreground mb-2">2025年5月20日 14:00〜16:00</p>
                  <p className="text-xs text-muted-foreground mb-3">オンライン開催</p>
                  <Button variant="outline" size="sm" className="w-full">
                    詳細を見る
                  </Button>
                </div>

                <div className="border rounded-lg p-3">
                  <h3 className="font-medium text-sm mb-1">東海地区 理系学生向け就職フェア</h3>
                  <p className="text-xs text-muted-foreground mb-2">2025年6月5日 10:00〜18:00</p>
                  <p className="text-xs text-muted-foreground mb-3">ポートメッセなごや</p>
                  <Button variant="outline" size="sm" className="w-full">
                    詳細を見る
                  </Button>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button variant="link" asChild>
                  <Link href="/events">すべてのイベントを見る</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
