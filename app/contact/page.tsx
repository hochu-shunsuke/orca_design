import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import ServiceHero from "@/components/service-hero"

export const metadata: Metadata = {
  title: "お問い合わせ | オルキャリ",
  description: "オルキャリへのお問い合わせはこちらからお願いします。",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ServiceHero title="CONTACT" subtitle="お問い合わせ" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">
                        会社名<span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input id="companyName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">部署名</Label>
                      <Input id="department" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        お名前<span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        メールアドレス<span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">
                        お問い合わせ種別<span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="inquiry-type">
                          <SelectValue placeholder="お問い合わせ種別を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="service">サービスについて</SelectItem>
                          <SelectItem value="price">料金について</SelectItem>
                          <SelectItem value="event">イベントについて</SelectItem>
                          <SelectItem value="media">取材・メディア掲載について</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      お問い合わせ内容<span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Textarea id="message" rows={6} required />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" />
                    <Label htmlFor="privacy" className="text-sm">
                      <span>
                        プライバシーポリシーに同意します。個人情報の取り扱いについては
                        <a href="/privacy" className="text-brand-orange hover:underline">
                          プライバシーポリシー
                        </a>
                        をご確認ください。
                      </span>
                    </Label>
                  </div>

                  <div className="text-center">
                    <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 px-8">
                      送信する
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">お問い合わせ先</h2>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-brand-orange" />
                    お電話でのお問い合わせ
                  </h3>
                  <p className="text-xl font-bold">052-123-4567</p>
                  <p className="text-sm text-muted-foreground">受付時間: 平日 9:00〜18:00</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-brand-orange" />
                    メールでのお問い合わせ
                  </h3>
                  <p className="text-lg">info@olcareer.jp</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-brand-orange" />
                    所在地
                  </h3>
                  <p>〒460-0008</p>
                  <p>愛知県名古屋市中区栄3-1-1</p>
                  <p>オルキャリビル5F</p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="font-bold mb-4">よくあるご質問</h3>
              <div className="space-y-2">
                <a href="/faq" className="text-brand-orange hover:underline block">
                  サービスの料金体系について
                </a>
                <a href="/faq" className="text-brand-orange hover:underline block">
                  イベントへの参加方法について
                </a>
                <a href="/faq" className="text-brand-orange hover:underline block">
                  採用成功事例が知りたい
                </a>
                <a href="/faq" className="text-brand-orange hover:underline block">
                  対応エリアについて
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
