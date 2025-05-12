import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceHero from "@/components/service-hero"

export const metadata: Metadata = {
  title: "料金プラン | 企業の方へ | オルキャリ",
  description: "オルキャリの企業向け料金プランのご案内。あなたの企業に最適なプランをお選びいただけます。",
}

export default function PricingPage() {
  const monthlyPlans = [
    {
      name: "ライトプラン",
      price: "30,000",
      description: "小規模な採用活動や初めて利用する企業様向けのプランです。",
      features: [
        "求人掲載 3件まで",
        "企業ページ 基本情報のみ",
        "イベント参加 年2回まで",
        "応募者管理機能",
        "採用活動レポート 基本情報のみ",
      ],
      limitations: ["学生へのスカウト機能なし", "採用コンサルティングなし", "自社イベントの掲載不可"],
      recommended: false,
    },
    {
      name: "スタンダードプラン",
      price: "50,000",
      description: "バランスの取れた機能で効果的な採用活動を実現します。",
      features: [
        "求人掲載 10件まで",
        "企業ページ カスタマイズ可能",
        "イベント参加 年4回まで",
        "応募者管理機能",
        "採用活動レポート 詳細情報あり",
        "学生へのスカウト機能",
        "採用コンサルティング 月1回",
      ],
      limitations: ["自社イベントの掲載不可", "採用サイト連携APIなし"],
      recommended: true,
    },
    {
      name: "プレミアムプラン",
      price: "100,000",
      description: "あらゆる機能を使い倒したい企業様向けの最上位プランです。",
      features: [
        "求人掲載 無制限",
        "企業ページ フルカスタマイズ",
        "イベント参加 無制限",
        "応募者管理機能 高度な分析あり",
        "採用活動レポート 詳細情報・競合分析あり",
        "学生へのスカウト機能 優先表示",
        "採用コンサルティング 月2回",
        "自社イベントの掲載",
        "採用サイト連携API",
      ],
      limitations: [],
      recommended: false,
    },
  ]

  const yearlyPlans = monthlyPlans.map((plan) => ({
    ...plan,
    price: String(Math.floor(Number(plan.price) * 10.8)),
    description: plan.description + "（年間契約で10%お得）",
  }))

  const additionalServices = [
    {
      name: "採用動画制作",
      price: "150,000",
      description: "プロのクリエイターが貴社の魅力を伝える採用動画を制作します。",
    },
    {
      name: "採用サイト制作",
      price: "300,000〜",
      description: "貴社の採用ブランディングに合わせた採用サイトを制作します。",
    },
    {
      name: "オンキャンパスイベント運営",
      price: "200,000〜",
      description: "大学内での企業説明会や座談会の企画・運営をサポートします。",
    },
    {
      name: "インターンシップ設計",
      price: "100,000〜",
      description: "効果的なインターンシッププログラムの設計をサポートします。",
    },
  ]

  return (
    <div className="flex flex-col">
      <ServiceHero title="PRICING" subtitle="料金プラン" />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">あなたの企業に最適なプランをお選びください</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            オルキャリは企業規模や採用ニーズに合わせて、3つの料金プランをご用意しています。
          </p>
        </section>

        <section className="mb-16">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">月額プラン</TabsTrigger>
                <TabsTrigger value="yearly">年間プラン（10%お得）</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {monthlyPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`border-2 ${
                      plan.recommended ? "border-brand-orange relative" : ""
                    } flex flex-col h-full`}
                  >
                    {plan.recommended && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                        おすすめ
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-center">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">¥{plan.price}</span>
                          <span className="text-muted-foreground">/月（税抜）</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-center text-muted-foreground mb-6">{plan.description}</p>
                      <div className="mb-4">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-brand-orange mb-2">
                          含まれる機能
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {plan.limitations.length > 0 && (
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                            含まれない機能
                          </h4>
                          <ul className="space-y-3">
                            {plan.limitations.map((limitation, limitationIndex) => (
                              <li key={limitationIndex} className="flex items-start text-muted-foreground">
                                <span className="mr-2">・</span>
                                <span>{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${plan.recommended ? "bg-brand-orange hover:bg-brand-orange/90" : ""}`}
                        variant={plan.recommended ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/for-companies/register">申し込む</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="yearly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {yearlyPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`border-2 ${
                      plan.recommended ? "border-brand-orange relative" : ""
                    } flex flex-col h-full`}
                  >
                    {plan.recommended && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                        おすすめ
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-center">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">¥{plan.price}</span>
                          <span className="text-muted-foreground">/月（税抜）</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-center text-muted-foreground mb-6">{plan.description}</p>
                      <div className="mb-4">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-brand-orange mb-2">
                          含まれる機能
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {plan.limitations.length > 0 && (
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                            含まれない機能
                          </h4>
                          <ul className="space-y-3">
                            {plan.limitations.map((limitation, limitationIndex) => (
                              <li key={limitationIndex} className="flex items-start text-muted-foreground">
                                <span className="mr-2">・</span>
                                <span>{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${plan.recommended ? "bg-brand-orange hover:bg-brand-orange/90" : ""}`}
                        variant={plan.recommended ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/for-companies/register">申し込む</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <p className="text-center text-sm text-muted-foreground mt-4">
            ※ 料金は全て税抜表示です。別途、初期設定費用（50,000円）がかかります。
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">オプションサービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold">¥{service.price}</span>
                      <span className="text-muted-foreground text-sm">（税抜）</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              オプションサービスの詳細については、お問い合わせください。ニーズに合わせたカスタマイズも可能です。
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">
                詳細を問い合わせる
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-brand-lightgray rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
                <div className="space-y-4">
                  <div className="border bg-white rounded-lg p-4">
                    <h3 className="font-bold mb-2">Q. 料金プランはいつでも変更できますか？</h3>
                    <p className="text-muted-foreground">
                      A.
                      はい、いつでもプランの変更が可能です。ただし、契約期間中のダウングレードの場合は、差額の返金はございません。アップグレードの場合は、日割り計算で差額をご請求いたします。
                    </p>
                  </div>
                  <div className="border bg-white rounded-lg p-4">
                    <h3 className="font-bold mb-2">Q. 最低契約期間はありますか？</h3>
                    <p className="text-muted-foreground">
                      A. 最低契約期間は3ヶ月となります。3ヶ月以降は1ヶ月単位での更新となります。
                    </p>
                  </div>
                  <div className="border bg-white rounded-lg p-4">
                    <h3 className="font-bold mb-2">Q. 支払い方法は何がありますか？</h3>
                    <p className="text-muted-foreground">
                      A. 銀行振込または口座振替に対応しています。クレジットカード決済をご希望の場合はご相談ください。
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-brand-orange" asChild>
                    <Link href="/faq">その他のよくある質問を見る</Link>
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
                <p className="mb-6">
                  料金プランやオプションサービスについてのご質問、お見積りのご依頼など、お気軽にお問い合わせください。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-white rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-orange"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">電話でのお問い合わせ</p>
                      <p className="text-lg">052-123-4567</p>
                      <p className="text-sm text-muted-foreground">受付時間: 平日 9:00〜18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-orange"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">メールでのお問い合わせ</p>
                      <p className="text-lg">sales@olcareer.jp</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                    <Link href="/contact">お問い合わせフォームへ</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">まずは無料で企業登録</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              企業登録は無料です。登録後、専任のコンサルタントが貴社の採用課題をヒアリングし、最適なプランをご提案します。
            </p>
            <Button className="bg-brand-orange hover:bg-brand-orange/90" size="lg" asChild>
              <Link href="/for-companies/register">無料で企業登録する</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
