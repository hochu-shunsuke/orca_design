import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Building, Users, Globe, Phone, Mail, Clock, Calendar, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "企業詳細 | オルキャリ",
  description: "企業の詳細情報をご覧いただけます。",
}

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  // ダミーデータ（実際の関数は別途定義される）
  const company = {
    id: params.id,
    name: "テクノ株式会社",
    industry: "IT・通信",
    location: "名古屋市中区",
    description:
      "当社は名古屋を拠点とするIT企業です。Webアプリケーション開発を中心に、様々なプロジェクトに携わっています。未経験の方でも研修制度が充実しているので安心してご応募ください。",
    foundedYear: "2005年",
    employees: "120名（2024年4月現在）",
    capital: "5,000万円",
    ceo: "山田 太郎",
    website: "https://example.com",
    phone: "052-123-4567",
    email: "recruit@example.com",
    address: "愛知県名古屋市中区栄3-1-1",
    businessHours: "9:00〜18:00（休憩60分）",
    holidays: "完全週休2日制（土日）、祝日、年末年始、夏季休暇",
    benefits: "社会保険完備、交通費支給、社員食堂、研修制度",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    message:
      "私たちは「技術で社会に貢献する」という理念のもと、日々新しい価値の創造に取り組んでいます。チャレンジ精神を持ち、共に成長していける方をお待ちしています。",
    culture: [
      "フラットな組織文化",
      "自由な発想を尊重",
      "リモートワーク可能",
      "社内勉強会の定期開催",
      "20代社員が活躍中",
    ],
    recruitmentProcess: ["エントリー", "書類選考", "一次面接", "二次面接", "最終面接", "内定"],
  }

  // 求人情報（ダミーデータ）
  const jobs = [
    {
      id: "1",
      title: "ITエンジニア（新卒採用）",
      employmentType: "正社員",
      location: "名古屋市中区",
      salary: "月給22万円〜",
      tags: ["IT", "プログラミング", "名古屋", "未経験歓迎"],
    },
    {
      id: "2",
      title: "Webデザイナー（新卒採用）",
      employmentType: "正社員",
      location: "名古屋市中区",
      salary: "月給21万円〜",
      tags: ["デザイン", "Web", "名古屋", "未経験歓迎"],
    },
    {
      id: "3",
      title: "営業職（新卒採用）",
      employmentType: "正社員",
      location: "名古屋市中区",
      salary: "月給23万円〜",
      tags: ["営業", "IT", "名古屋"],
    },
  ]

  // 会社イベント（ダミーデータ）
  const events = [
    {
      id: "1",
      title: "テクノ株式会社 会社説明会",
      date: "2025年5月15日",
      time: "13:00〜15:00",
      location: "名古屋国際会議場",
    },
    {
      id: "2",
      title: "テクノ株式会社 インターンシップ説明会",
      date: "2025年6月10日",
      time: "14:00〜16:00",
      location: "オンライン開催",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-brand-orange">
          ホーム
        </Link>
        <span>/</span>
        <Link href="/companies" className="hover:text-brand-orange">
          企業一覧
        </Link>
        <span>/</span>
        <span>企業詳細</span>
      </div>

      <div className="relative mb-8">
        <div className="relative h-[300px] w-full rounded-t-lg overflow-hidden">
          <Image src={company.coverImage || "/placeholder.svg"} alt={company.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-6 text-white flex items-end gap-6">
          <div className="relative h-24 w-24 border-4 border-white rounded-lg overflow-hidden bg-white">
            <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{company.name}</h1>
            <p className="text-lg">{company.industry}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>企業情報</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">概要</TabsTrigger>
                  <TabsTrigger value="details">詳細情報</TabsTrigger>
                  <TabsTrigger value="culture">企業文化</TabsTrigger>
                  <TabsTrigger value="gallery">ギャラリー</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 pt-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">企業概要</h3>
                    <p className="text-muted-foreground">{company.description}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg mb-2">代表メッセージ</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-muted-foreground italic">{company.message}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Building className="h-5 w-5 mt-0.5 text-brand-orange" />
                      <div>
                        <h4 className="font-medium">設立</h4>
                        <p className="text-muted-foreground">{company.foundedYear}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-5 w-5 mt-0.5 text-brand-orange" />
                      <div>
                        <h4 className="font-medium">従業員数</h4>
                        <p className="text-muted-foreground">{company.employees}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 mt-0.5 text-brand-orange" />
                      <div>
                        <h4 className="font-medium">所在地</h4>
                        <p className="text-muted-foreground">{company.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Globe className="h-5 w-5 mt-0.5 text-brand-orange" />
                      <div>
                        <h4 className="font-medium">Webサイト</h4>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-orange hover:underline"
                        >
                          {company.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-lg mb-4">基本情報</h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">会社名</span>
                          <span className="col-span-2">{company.name}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">業種</span>
                          <span className="col-span-2">{company.industry}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">設立</span>
                          <span className="col-span-2">{company.foundedYear}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">資本金</span>
                          <span className="col-span-2">{company.capital}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">代表者</span>
                          <span className="col-span-2">{company.ceo}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">従業員数</span>
                          <span className="col-span-2">{company.employees}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-4">勤務情報</h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">勤務時間</span>
                          <span className="col-span-2">{company.businessHours}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">休日・休暇</span>
                          <span className="col-span-2">{company.holidays}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">福利厚生</span>
                          <span className="col-span-2">{company.benefits}</span>
                        </div>
                      </div>

                      <h3 className="font-medium text-lg mt-6 mb-4">連絡先</h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">電話番号</span>
                          <span className="col-span-2">{company.phone}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">メール</span>
                          <span className="col-span-2">{company.email}</span>
                        </div>
                        <div className="grid grid-cols-3 border-b pb-2">
                          <span className="font-medium">所在地</span>
                          <span className="col-span-2">{company.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="culture" className="space-y-6 pt-6">
                  <div>
                    <h3 className="font-medium text-lg mb-4">企業文化・特徴</h3>
                    <div className="flex flex-wrap gap-3">
                      {company.culture.map((item, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg mb-4">採用フロー</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                      {company.recruitmentProcess.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className="bg-brand-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                            {index + 1}
                          </div>
                          <span className="ml-2">{step}</span>
                          {index < company.recruitmentProcess.length - 1 && (
                            <div className="w-6 h-0.5 bg-muted-foreground mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {company.gallery.map((image, index) => (
                      <div key={index} className="relative h-48 rounded-md overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${company.name}の画像 ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>求人情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-lg mb-2">
                            <Link href={`/jobs/${job.id}`} className="hover:text-brand-orange">
                              {job.title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{job.employmentType}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="mr-1 h-3.5 w-3.5" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Briefcase className="mr-1 h-3.5 w-3.5" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {job.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="rounded-full">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 md:self-end">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/jobs/${job.id}`}>詳細を見る</Link>
                          </Button>
                          <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90">
                            応募する
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-4 text-center">
                <Button variant="outline" asChild>
                  <Link href={`/companies/${company.id}/jobs`}>すべての求人を見る</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>企業情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">業種</h3>
                  <p className="text-sm text-muted-foreground">{company.industry}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">所在地</h3>
                  <p className="text-sm text-muted-foreground">{company.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">従業員数</h3>
                  <p className="text-sm text-muted-foreground">{company.employees}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">Webサイト</h3>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-orange hover:underline"
                  >
                    {company.website}
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                  <Link href={`/companies/${company.id}/jobs`}>この企業の求人を見る</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>会社説明会・イベント</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border rounded-lg p-3">
                    <h3 className="font-medium text-sm mb-1">
                      <Link href={`/events/${event.id}`} className="hover:text-brand-orange">
                        {event.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <Calendar className="mr-1 h-3.5 w-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <Clock className="mr-1 h-3.5 w-3.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <MapPin className="mr-1 h-3.5 w-3.5" />
                      <span>{event.location}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/events/${event.id}`}>詳細を見る</Link>
                    </Button>
                  </div>
                ))}

                {events.length === 0 && (
                  <p className="text-center text-muted-foreground py-4">現在予定されているイベントはありません</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>企業へのお問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">電話番号</h3>
                  <p className="text-sm text-muted-foreground">{company.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">メールアドレス</h3>
                  <p className="text-sm text-muted-foreground">{company.email}</p>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href={`/contact?company=${company.name}`}>お問い合わせフォームへ</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
