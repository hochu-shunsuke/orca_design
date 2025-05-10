import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ServiceHero from "@/components/service-hero"

export const metadata: Metadata = {
  title: "会社情報 | オルキャリ",
  description: "オルキャリを運営する会社の情報をご紹介します。",
}

export default function CompanyPage() {
  const companyInfo = [
    { label: "会社名", value: "株式会社オルキャリ" },
    { label: "設立", value: "2020年4月1日" },
    { label: "代表取締役", value: "山田 太郎" },
    { label: "資本金", value: "5,000万円" },
    { label: "従業員数", value: "45名（2025年4月現在）" },
    { label: "事業内容", value: "新卒採用支援サービス、就職イベント運営、キャリア教育支援" },
    { label: "所在地", value: "愛知県名古屋市中区栄3-1-1 オルキャリビル5F" },
    { label: "電話番号", value: "052-123-4567" },
    { label: "メールアドレス", value: "info@olcareer.jp" },
  ]

  const philosophy = [
    {
      title: "ミッション",
      description: "地方の優秀な人材と企業をつなぎ、地域経済の活性化に貢献する",
    },
    {
      title: "ビジョン",
      description: "東海地方No.1の新卒採用プラットフォームとなり、地域の雇用創出に寄与する",
    },
    {
      title: "バリュー",
      description: "地域密着・学生第一・企業成長・イノベーション・信頼関係",
    },
  ]

  const history = [
    { year: "2020年", event: "株式会社オルキャリ設立" },
    { year: "2020年", event: "新卒採用支援サービス「オルキャリ」リリース" },
    { year: "2021年", event: "名古屋オフィス開設" },
    { year: "2022年", event: "登録学生数10,000名突破" },
    { year: "2023年", event: "静岡オフィス開設" },
    { year: "2024年", event: "登録企業数500社突破" },
    { year: "2025年", event: "岐阜・三重オフィス開設" },
  ]

  return (
    <div className="flex flex-col">
      <ServiceHero title="COMPANY" subtitle="会社情報" />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">会社概要</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="オフィス風景"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="space-y-4">
                  {companyInfo.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 border-b pb-2">
                      <dt className="font-medium col-span-1">{item.label}</dt>
                      <dd className="col-span-2">{item.value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">企業理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((item, index) => (
              <Card key={index} className="border-t-4 border-t-brand-orange">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">沿革</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {history.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 md:grid-cols-6 border-b pb-2">
                    <dt className="font-medium col-span-1 md:col-span-2">{item.year}</dt>
                    <dd className="col-span-3 md:col-span-4">{item.event}</dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-8">アクセス</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px]">
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">地図が表示されます</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">本社</h3>
                  <p>〒460-0008</p>
                  <p>愛知県名古屋市中区栄3-1-1 オルキャリビル5F</p>
                  <p className="mt-4">
                    <span className="font-medium">アクセス：</span>
                    名古屋市営地下鉄東山線・名城線「栄駅」から徒歩5分
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
