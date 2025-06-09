import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building, MapPin, Banknote, Calendar, Clock, BookmarkPlus, Share2, CheckCircle2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GraduationYearBadge from "@/components/graduation-year-badge"

export const metadata: Metadata = {
  title: "インターンシップ詳細 | オルキャリ",
  description: "東海地方の企業が提供する長期インターンシップの詳細情報です。",
}

export default function InternshipDetailPage({ params }: { params: { id: string } }) {
  // ダミーデータ（実際の関数は別途定義される）
  const internship = {
    id: params.id,
    title: "Webアプリ開発インターン",
    company: "テクノ株式会社",
    location: "名古屋市中区",
    workStyle: "ハイブリッド（週1日以上出社）",
    period: "3ヶ月〜1年",
    workDays: "週3日〜",
    workHours: "10:00〜19:00（休憩60分）",
    salary: "時給1,200円〜",
    description:
      "実際のプロジェクトに参加し、Webアプリケーション開発の実務経験を積むことができます。React、Next.jsなどのモダンな技術スタックを使用します。エンジニアとしてのキャリアをスタートさせたい学生の方におすすめのインターンシップです。",
    requirements:
      "・プログラミングの基礎知識がある方\n・HTML/CSS/JavaScriptの基本的な理解がある方\n・週3日以上参加可能な方\n・チームでの作業に意欲的な方",
    benefits: "交通費支給（上限あり）、社食利用可、技術書籍貸出、社内勉強会参加可",
    tags: ["IT", "プログラミング", "名古屋"],
    graduationYears: ["27卒", "28卒"],
    logo: "/placeholder.svg?height=120&width=120",
    companyImage: "/placeholder.svg?height=300&width=600",
    applicationDeadline: "2025年6月30日",
    startDate: "応相談",
    regularEmployment: true,
    featured: true,
  }

  // 関連インターンシップ（ダミーデータ）
  const relatedInternships = [
    {
      id: "2",
      title: "マーケティングアシスタント",
      company: "三河デジタル",
      location: "豊橋市",
      workDays: "週2日〜",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "4",
      title: "UI/UXデザイナーアシスタント",
      company: "テクノ株式会社",
      location: "名古屋市中区",
      workDays: "週3日〜",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "6",
      title: "研究開発アシスタント",
      company: "中部研究所",
      location: "浜松市中区",
      workDays: "週3日〜",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-brand-orange">
          ホーム
        </Link>
        <span>/</span>
        <Link href="/internships" className="hover:text-brand-orange">
          インターンシップ
        </Link>
        <span>/</span>
        <span>詳細</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border">
                  <Image
                    src={internship.logo || "/placeholder.svg"}
                    alt={internship.company}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">{internship.title}</h1>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Building className="mr-1 h-4 w-4" />
                    <span>{internship.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Banknote className="mr-1 h-4 w-4" />
                    <span>{internship.salary}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {internship.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                    {internship.graduationYears.map((year) => (
                      <GraduationYearBadge key={year} year={year} />
                    ))}
                    {internship.regularEmployment && (
                      <Badge variant="outline" className="rounded-full bg-green-100 text-green-800">
                        本採用あり
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6 border-t pt-6">
                <Button className="flex-1 bg-brand-orange hover:bg-brand-orange/90">応募する</Button>
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
              <CardTitle>インターンシップ詳細</CardTitle>
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
                    <h3 className="font-medium mb-2">インターンシップ内容</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{internship.description}</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">応募資格</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{internship.requirements}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">勤務形態</h3>
                      <div className="flex items-start gap-2">
                        <Building className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <p className="text-muted-foreground">{internship.workStyle}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">勤務日数</h3>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <p className="text-muted-foreground">{internship.workDays}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">勤務時間</h3>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <p className="text-muted-foreground">{internship.workHours}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">期間</h3>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <p className="text-muted-foreground">{internship.period}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">待遇・福利厚生</h3>
                    <p className="text-muted-foreground">{internship.benefits}</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">本採用について</h3>
                    {internship.regularEmployment ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        <p>インターン終了後、本採用選考への推薦制度あり</p>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">
                        本インターンシップは就業体験が目的のため、本採用への直接的な連携はありません。
                      </p>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="company" className="space-y-6 pt-4">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={internship.companyImage || "/placeholder.svg"}
                      alt={internship.company}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">企業概要</h3>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 border-b pb-2">
                        <span className="font-medium">会社名</span>
                        <span className="col-span-2">{internship.company}</span>
                      </div>
                      <div className="grid grid-cols-3 border-b pb-2">
                        <span className="font-medium">所在地</span>
                        <span className="col-span-2">{internship.location}</span>
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
                      <Link href={`/companies/${internship.company}`}>企業詳細ページへ</Link>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="application" className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">応募締切</h3>
                      <p className="text-muted-foreground">{internship.applicationDeadline}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">開始時期</h3>
                      <p className="text-muted-foreground">{internship.startDate}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">選考フロー</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>エントリー</li>
                      <li>書類選考</li>
                      <li>面接（1回）</li>
                      <li>合否連絡</li>
                      <li>勤務開始</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">応募方法</h3>
                    <p className="text-muted-foreground mb-4">
                      下記の「応募する」ボタンから応募フォームにお進みください。
                    </p>
                    <Button className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90">応募する</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>インターンシップ情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">勤務形態</h3>
                  <p className="text-sm text-muted-foreground">{internship.workStyle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">勤務地</h3>
                  <p className="text-sm text-muted-foreground">{internship.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">期間・日数</h3>
                  <p className="text-sm text-muted-foreground">
                    {internship.period}・{internship.workDays}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-orange" />
                <div>
                  <h3 className="font-medium">対象</h3>
                  <p className="text-sm text-muted-foreground">{internship.graduationYears.join("、")}向け</p>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">応募する</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>関連インターンシップ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatedInternships.map((relatedInternship) => (
                  <Link key={relatedInternship.id} href={`/internships/${relatedInternship.id}`}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={relatedInternship.logo || "/placeholder.svg"}
                          alt={relatedInternship.company}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{relatedInternship.title}</h3>
                        <p className="text-xs text-muted-foreground">{relatedInternship.company}</p>
                        <p className="text-xs text-muted-foreground">
                          {relatedInternship.location}・{relatedInternship.workDays}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>インターンシップガイド</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-3">
                  <h3 className="font-medium text-sm mb-1">インターンシップの選び方</h3>
                  <p className="text-xs text-muted-foreground mb-3">自分に合ったインターンシップを見つけるポイント</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/internships/guide/how-to-choose">詳細を見る</Link>
                  </Button>
                </div>

                <div className="border rounded-lg p-3">
                  <h3 className="font-medium text-sm mb-1">インターン中の過ごし方</h3>
                  <p className="text-xs text-muted-foreground mb-3">インターンシップを成功させるためのアドバイス</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/internships/guide/tips">詳細を見る</Link>
                  </Button>
                </div>

                <div className="border rounded-lg p-3">
                  <h3 className="font-medium text-sm mb-1">インターンから本採用へ</h3>
                  <p className="text-xs text-muted-foreground mb-3">本採用を見据えたインターンシップの活かし方</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/internships/guide/to-employment">詳細を見る</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
