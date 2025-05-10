import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  User,
  Briefcase,
  BookOpen,
  Calendar,
  Bell,
  Settings,
  FileText,
  Heart,
  Clock,
  CheckCircle2,
  Building,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "マイページ | オルキャリ",
  description: "オルキャリのマイページ",
}

export default function MyPage() {
  // ダミーデータ（実際の関数は別途定義される）
  const user = {
    name: "山田 太郎",
    university: "名古屋大学",
    department: "工学部",
    graduationYear: "2026年",
    email: "yamada@example.com",
    profileCompletion: 75,
    appliedJobs: 8,
    favoriteJobs: 12,
    unreadMessages: 3,
    upcomingEvents: 2,
  }

  const appliedJobs = [
    {
      id: "1",
      title: "ITエンジニア",
      company: "テクノ株式会社",
      location: "名古屋市中区",
      logo: "/placeholder.svg?height=60&width=60",
      status: "書類選考中",
      appliedDate: "2025/4/15",
    },
    {
      id: "2",
      title: "営業職",
      company: "東海商事",
      location: "静岡市葵区",
      logo: "/placeholder.svg?height=60&width=60",
      status: "一次面接通過",
      appliedDate: "2025/4/10",
    },
    {
      id: "3",
      title: "総合職",
      company: "中部産業",
      location: "岐阜市",
      logo: "/placeholder.svg?height=60&width=60",
      status: "二次面接予定",
      appliedDate: "2025/4/5",
      interviewDate: "2025/5/10",
    },
  ]

  const favoriteJobs = [
    {
      id: "4",
      title: "マーケティング",
      company: "三河デジタル",
      location: "豊橋市",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "5",
      title: "人事",
      company: "東海人材",
      location: "名古屋市中村区",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "6",
      title: "研究開発",
      company: "中部研究所",
      location: "浜松市中区",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  const upcomingEvents = [
    {
      id: "1",
      title: "合同企業説明会 in 名古屋",
      date: "2025年5月15日",
      time: "13:00〜17:00",
      location: "名古屋国際会議場",
    },
    {
      id: "2",
      title: "IT業界研究セミナー",
      date: "2025年5月20日",
      time: "14:00〜16:00",
      location: "オンライン開催",
    },
  ]

  const recentMessages = [
    {
      id: "1",
      from: "テクノ株式会社",
      subject: "書類選考結果のお知らせ",
      date: "2025/4/20",
      isRead: false,
    },
    {
      id: "2",
      from: "東海商事",
      subject: "一次面接のご案内",
      date: "2025/4/18",
      isRead: false,
    },
    {
      id: "3",
      from: "オルキャリ事務局",
      subject: "プロフィール入力のお願い",
      date: "2025/4/15",
      isRead: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">マイページ</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>プロフィール</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full bg-brand-lightgray mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-brand-gray" />
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">
                  {user.university} {user.department}
                </p>
                <p className="text-muted-foreground">{user.graduationYear}卒業予定</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>プロフィール完成度</span>
                  <span className="font-medium">{user.profileCompletion}%</span>
                </div>
                <Progress value={user.profileCompletion} className="h-2" />
              </div>

              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                <Link href="/mypage/edit-profile">プロフィールを編集</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>マイメニュー</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="flex flex-col">
                <Link
                  href="/mypage/applications"
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <Briefcase className="h-5 w-5 text-brand-orange" />
                  <span>応募管理</span>
                  <Badge className="ml-auto bg-brand-orange">{user.appliedJobs}</Badge>
                </Link>
                <Link
                  href="/mypage/favorites"
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <Heart className="h-5 w-5 text-brand-orange" />
                  <span>お気に入り</span>
                  <Badge className="ml-auto bg-brand-orange">{user.favoriteJobs}</Badge>
                </Link>
                <Link
                  href="/mypage/messages"
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <Bell className="h-5 w-5 text-brand-orange" />
                  <span>メッセージ</span>
                  {user.unreadMessages > 0 && <Badge className="ml-auto bg-brand-orange">{user.unreadMessages}</Badge>}
                </Link>
                <Link
                  href="/mypage/events"
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <Calendar className="h-5 w-5 text-brand-orange" />
                  <span>イベント予約</span>
                  {user.upcomingEvents > 0 && <Badge className="ml-auto bg-brand-orange">{user.upcomingEvents}</Badge>}
                </Link>
                <Link
                  href="/mypage/documents"
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <FileText className="h-5 w-5 text-brand-orange" />
                  <span>提出書類管理</span>
                </Link>
                <Link
                  href="/mypage/learning"
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <BookOpen className="h-5 w-5 text-brand-orange" />
                  <span>就活対策</span>
                </Link>
                <Link
                  href="/mypage/settings"
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <Settings className="h-5 w-5 text-brand-orange" />
                  <span>設定</span>
                </Link>
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="applications">応募状況</TabsTrigger>
              <TabsTrigger value="favorites">お気に入り</TabsTrigger>
              <TabsTrigger value="activity">最近の活動</TabsTrigger>
            </TabsList>

            <TabsContent value="applications" className="space-y-4 pt-4">
              <h3 className="text-lg font-medium">応募中の求人 ({appliedJobs.length})</h3>

              {appliedJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 flex items-start gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
                        <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">
                          <Link href={`/jobs/${job.id}`} className="hover:text-brand-orange">
                            {job.title}
                          </Link>
                        </h4>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Building className="mr-1 h-3.5 w-3.5" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3.5 w-3.5" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-sm mt-2">
                          <Badge variant="outline" className="rounded-full">
                            {job.status}
                          </Badge>
                          <span className="text-muted-foreground ml-2">応募日: {job.appliedDate}</span>
                          {job.interviewDate && (
                            <span className="text-muted-foreground ml-2">面接日: {job.interviewDate}</span>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/mypage/applications/${job.id}`}>詳細</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/mypage/applications">すべての応募を見る</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4 pt-4">
              <h3 className="text-lg font-medium">お気に入りの求人 ({favoriteJobs.length})</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favoriteJobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
                          <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">
                            <Link href={`/jobs/${job.id}`} className="hover:text-brand-orange">
                              {job.title}
                            </Link>
                          </h4>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Building className="mr-1 h-3 w-3" />
                            <span className="truncate">{job.company}</span>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span className="truncate">{job.location}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="shrink-0 bg-brand-orange text-white hover:bg-brand-orange/90 border-brand-orange"
                          asChild
                        >
                          <Link href={`/jobs/${job.id}`}>応募</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/mypage/favorites">すべてのお気に入りを見る</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6 pt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">最近のメッセージ</h3>

                {recentMessages.map((message) => (
                  <Card
                    key={message.id}
                    className={`overflow-hidden ${!message.isRead ? "border-l-4 border-l-brand-orange" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">
                            <Link href={`/mypage/messages/${message.id}`} className="hover:text-brand-orange">
                              {message.subject}
                            </Link>
                            {!message.isRead && <Badge className="ml-2 bg-brand-orange">新着</Badge>}
                          </h4>
                          <p className="text-sm text-muted-foreground">From: {message.from}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">{message.date}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/mypage/messages">すべてのメッセージを見る</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">参加予定のイベント</h3>

                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Calendar className="h-10 w-10 text-brand-orange shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-medium">
                            <Link href={`/events/${event.id}`} className="hover:text-brand-orange">
                              {event.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {event.date} {event.time}
                          </p>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/events/${event.id}`}>詳細</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/mypage/events">すべてのイベントを見る</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>就活ステータス</CardTitle>
              <CardDescription>あなたの就活の進捗状況</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>プロフィール登録</span>
                  </div>
                  <Badge variant="outline" className="bg-green-100">
                    完了
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>自己PR作成</span>
                  </div>
                  <Badge variant="outline" className="bg-green-100">
                    完了
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <span>履歴書アップロード</span>
                  </div>
                  <Badge variant="outline" className="bg-yellow-100">
                    進行中
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-gray" />
                    <span>企業研究</span>
                  </div>
                  <Badge variant="outline">未着手</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-gray" />
                    <span>面接対策</span>
                  </div>
                  <Badge variant="outline">未着手</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                <Link href="/mypage/status">就活ステータスを更新</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
