import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import ServiceHero from "@/components/service-hero"

export const metadata: Metadata = {
  title: "企業登録 | オルキャリ",
  description: "オルキャリに企業登録して、東海地方の優秀な学生との出会いを実現しましょう。",
}

export default function CompanyRegisterPage() {
  return (
    <div className="flex flex-col">
      <ServiceHero title="COMPANY REGISTRATION" subtitle="企業登録" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">企業登録フォーム</h2>
          <p className="text-center text-muted-foreground mb-12">
            以下のフォームに必要事項をご入力ください。登録後、担当者よりご連絡いたします。
          </p>

          <Card>
            <CardHeader>
              <CardTitle>基本情報</CardTitle>
              <CardDescription>企業の基本情報をご入力ください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">
                  会社名<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input id="companyName" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">
                    業種<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select required>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="業種を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT・通信</SelectItem>
                      <SelectItem value="manufacturing">製造業</SelectItem>
                      <SelectItem value="finance">金融・保険</SelectItem>
                      <SelectItem value="retail">小売・流通</SelectItem>
                      <SelectItem value="service">サービス業</SelectItem>
                      <SelectItem value="construction">建設・不動産</SelectItem>
                      <SelectItem value="medical">医療・福祉</SelectItem>
                      <SelectItem value="education">教育・学習支援</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeCount">
                    従業員数<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select required>
                    <SelectTrigger id="employeeCount">
                      <SelectValue placeholder="従業員数を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1〜50名</SelectItem>
                      <SelectItem value="51-100">51〜100名</SelectItem>
                      <SelectItem value="101-300">101〜300名</SelectItem>
                      <SelectItem value="301-500">301〜500名</SelectItem>
                      <SelectItem value="501-1000">501〜1000名</SelectItem>
                      <SelectItem value="1001+">1001名以上</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyAddress">
                  本社所在地<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input id="companyAddress" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyWebsite">
                  企業Webサイト<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input id="companyWebsite" type="url" placeholder="https://" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyDescription">会社概要</Label>
                <Textarea
                  id="companyDescription"
                  placeholder="会社の事業内容や特徴などをご記入ください"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>

            <CardHeader className="border-t pt-6">
              <CardTitle>担当者情報</CardTitle>
              <CardDescription>ご担当者様の情報をご入力ください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">
                    お名前<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="contactName" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactDepartment">
                    部署名<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="contactDepartment" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">
                    メールアドレス<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="contactEmail" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">
                    電話番号<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="contactPhone" type="tel" required />
                </div>
              </div>
            </CardContent>

            <CardHeader className="border-t pt-6">
              <CardTitle>ご希望のプラン</CardTitle>
              <CardDescription>ご希望のプランをお選びください（後からでも変更可能です）</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="plan-light" />
                  <Label htmlFor="plan-light" className="font-medium">
                    ライトプラン（月額30,000円）
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="plan-standard" defaultChecked />
                  <Label htmlFor="plan-standard" className="font-medium">
                    スタンダードプラン（月額50,000円）
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="plan-premium" />
                  <Label htmlFor="plan-premium" className="font-medium">
                    プレミアムプラン（月額100,000円）
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="plan-undecided" />
                  <Label htmlFor="plan-undecided" className="font-medium">
                    まだ決まっていない（担当者と相談したい）
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recruitmentNeeds">採用ニーズ・ご要望</Label>
                <Textarea
                  id="recruitmentNeeds"
                  placeholder="採用予定人数や職種、ご要望などをご記入ください"
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="privacy-policy" required />
                <Label htmlFor="privacy-policy" className="text-sm">
                  <span>
                    <Link href="/privacy" className="text-brand-orange hover:underline">
                      プライバシーポリシー
                    </Link>
                    に同意します
                  </span>
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">登録する</Button>
            </CardFooter>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              ご不明な点がございましたら、
              <Link href="/contact" className="text-brand-orange hover:underline">
                お問い合わせフォーム
              </Link>
              または電話（052-123-4567）までお気軽にご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
