import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "プロフィール編集 | オルキャリ",
  description: "オルキャリのプロフィール編集ページ",
}

export default function EditProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/mypage" className="hover:text-brand-orange">
          マイページ
        </Link>
        <span>/</span>
        <span>プロフィール編集</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">プロフィール編集</h1>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">基本情報</TabsTrigger>
          <TabsTrigger value="education">学歴・資格</TabsTrigger>
          <TabsTrigger value="career">自己PR・志望動機</TabsTrigger>
          <TabsTrigger value="preferences">希望条件</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>基本情報</CardTitle>
              <CardDescription>あなたの基本的な情報を入力してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="lastName">姓</Label>
                  <Input id="lastName" defaultValue="山田" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">名</Label>
                  <Input id="firstName" defaultValue="太郎" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="lastNameKana">姓（カナ）</Label>
                  <Input id="lastNameKana" defaultValue="ヤマダ" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstNameKana">名（カナ）</Label>
                  <Input id="firstNameKana" defaultValue="タロウ" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" type="email" defaultValue="yamada@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">電話番号</Label>
                <Input id="phone" type="tel" defaultValue="090-1234-5678" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="birthYear">生年月日（年）</Label>
                  <Select defaultValue="2003">
                    <SelectTrigger id="birthYear">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000">2000年</SelectItem>
                      <SelectItem value="2001">2001年</SelectItem>
                      <SelectItem value="2002">2002年</SelectItem>
                      <SelectItem value="2003">2003年</SelectItem>
                      <SelectItem value="2004">2004年</SelectItem>
                      <SelectItem value="2005">2005年</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthMonth">月</Label>
                  <Select defaultValue="4">
                    <SelectTrigger id="birthMonth">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}月
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDay">日</Label>
                  <Select defaultValue="15">
                    <SelectTrigger id="birthDay">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 31 }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}日
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">性別</Label>
                <Select defaultValue="male">
                  <SelectTrigger id="gender">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">男性</SelectItem>
                    <SelectItem value="female">女性</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                    <SelectItem value="no_answer">回答しない</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">現住所</Label>
                <Input id="address" defaultValue="愛知県名古屋市中区栄3-1-1" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">キャンセル</Button>
              <Button className="bg-brand-orange hover:bg-brand-orange/90">保存</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>学歴情報</CardTitle>
              <CardDescription>あなたの学歴情報を入力してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="university">大学名</Label>
                <Input id="university" defaultValue="名古屋大学" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="faculty">学部</Label>
                  <Input id="faculty" defaultValue="工学部" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">学科</Label>
                  <Input id="department" defaultValue="情報工学科" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="admissionYear">入学年度</Label>
                  <Select defaultValue="2022">
                    <SelectTrigger id="admissionYear">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2020">2020年</SelectItem>
                      <SelectItem value="2021">2021年</SelectItem>
                      <SelectItem value="2022">2022年</SelectItem>
                      <SelectItem value="2023">2023年</SelectItem>
                      <SelectItem value="2024">2024年</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduationYear">卒業予定年度</Label>
                  <Select defaultValue="2026">
                    <SelectTrigger id="graduationYear">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024年</SelectItem>
                      <SelectItem value="2025">2025年</SelectItem>
                      <SelectItem value="2026">2026年</SelectItem>
                      <SelectItem value="2027">2027年</SelectItem>
                      <SelectItem value="2028">2028年</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>資格・スキル</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill1" />
                    <Label htmlFor="skill1">TOEIC (800点以上)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill2" defaultChecked />
                    <Label htmlFor="skill2">基本情報技術者試験</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill3" />
                    <Label htmlFor="skill3">応用情報技術者試験</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill4" defaultChecked />
                    <Label htmlFor="skill4">Java プログラミング</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill5" defaultChecked />
                    <Label htmlFor="skill5">HTML/CSS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill6" />
                    <Label htmlFor="skill6">Python</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="otherSkills">その他の資格・スキル</Label>
                <Textarea id="otherSkills" placeholder="その他の資格やスキルがあれば入力してください" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">キャンセル</Button>
              <Button className="bg-brand-orange hover:bg-brand-orange/90">保存</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="career" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>自己PR・志望動機</CardTitle>
              <CardDescription>あなたの強みや志望動機を入力してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="selfPR">自己PR</Label>
                <Textarea
                  id="selfPR"
                  placeholder="あなたの強みや特徴を記入してください"
                  className="min-h-[150px]"
                  defaultValue="私は大学での研究活動を通じて、データ分析とプログラミングのスキルを身につけました。特にチームプロジェクトでは、メンバー間のコミュニケーションを大切にし、リーダーシップを発揮して課題を解決してきました。また、アルバイト経験を通じて、顧客対応力やビジネスマナーも習得しています。"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">志望動機</Label>
                <Textarea
                  id="motivation"
                  placeholder="志望動機を記入してください"
                  className="min-h-[150px]"
                  defaultValue="IT技術を活用して社会課題を解決したいという思いから、技術力の高い企業での就職を希望しています。特に、ユーザー視点に立ったサービス開発に興味があり、実際のプロダクト開発に携わりたいと考えています。"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">学生時代の経験</Label>
                <Textarea
                  id="experience"
                  placeholder="学生時代に力を入れたことを記入してください"
                  className="min-h-[150px]"
                  defaultValue="大学のプログラミングサークルで活動し、複数のアプリケーション開発プロジェクトに参加しました。また、インターンシップでは実際の企業でのシステム開発を経験し、実務レベルのスキルを身につけることができました。"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">キャンセル</Button>
              <Button className="bg-brand-orange hover:bg-brand-orange/90">保存</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>希望条件</CardTitle>
              <CardDescription>あなたの就職希望条件を入力してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>希望業種</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="industry1" defaultChecked />
                    <Label htmlFor="industry1">IT・通信</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="industry2" defaultChecked />
                    <Label htmlFor="industry2">メーカー</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="industry3" />
                    <Label htmlFor="industry3">商社</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="industry4" />
                    <Label htmlFor="industry4">金融</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="industry5" />
                    <Label htmlFor="industry5">サービス</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="industry6" />
                    <Label htmlFor="industry6">コンサルティング</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>希望職種</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="job1" defaultChecked />
                    <Label htmlFor="job1">エンジニア</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="job2" />
                    <Label htmlFor="job2">営業</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="job3" defaultChecked />
                    <Label htmlFor="job3">研究開発</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="job4" />
                    <Label htmlFor="job4">企画</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="job5" />
                    <Label htmlFor="job5">マーケティング</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="job6" />
                    <Label htmlFor="job6">総合職</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>希望勤務地</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location1" defaultChecked />
                    <Label htmlFor="location1">愛知県</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location2" defaultChecked />
                    <Label htmlFor="location2">岐阜県</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location3" />
                    <Label htmlFor="location3">三重県</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location4" />
                    <Label htmlFor="location4">静岡県</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location5" />
                    <Label htmlFor="location5">東京都</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location6" />
                    <Label htmlFor="location6">大阪府</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workStyle">希望の働き方</Label>
                <Select defaultValue="hybrid">
                  <SelectTrigger id="workStyle">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office">オフィスワーク中心</SelectItem>
                    <SelectItem value="remote">リモートワーク中心</SelectItem>
                    <SelectItem value="hybrid">ハイブリッド</SelectItem>
                    <SelectItem value="any">どちらでも可</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="otherPreferences">その他の希望条件</Label>
                <Textarea
                  id="otherPreferences"
                  placeholder="その他の希望条件があれば入力してください"
                  defaultValue="福利厚生が充実している企業を希望します。また、技術力向上のための研修制度があると嬉しいです。"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">キャンセル</Button>
              <Button className="bg-brand-orange hover:bg-brand-orange/90">保存</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
