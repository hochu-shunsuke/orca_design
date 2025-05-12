import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceHero from "@/components/service-hero"

export const metadata: Metadata = {
  title: "企業の方へ | オルキャリ",
  description: "オルキャリの企業向けサービスのご案内。東海地方の優秀な学生との出会いをサポートします。",
}

export default function ForCompaniesPage() {
  const features = [
    {
      title: "地域特化型採用プラットフォーム",
      description: "東海地方の大学・専門学校と強いパイプを持ち、地元で就職を希望する学生にリーチできます。",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "高いマッチング精度",
      description: "詳細なプロフィール情報と独自のマッチングアルゴリズムにより、企業と学生の相性を高精度で判定します。",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "効果的なイベント",
      description: "合同企業説明会やセミナーなど、学生と直接交流できる機会を定期的に開催しています。",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "採用活動の効率化",
      description: "応募者管理や選考プロセスの一元管理により、採用業務を効率化します。",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "企業ブランディング",
      description: "充実した企業ページで自社の魅力を効果的に発信し、認知度向上につなげます。",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "採用コンサルティング",
      description: "採用戦略の立案から実行まで、専任のコンサルタントがサポートします。",
      icon: "/placeholder.svg?height=60&width=60",
    },
  ]

  const plans = [
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
      recommended: false,
    },
  ]

  const testimonials = [
    {
      quote:
        "オルキャリを活用することで、地元の理系学生へのアプローチが強化され、エンジニア職の応募者が前年比150%に増加。採用コストを30%削減しながら、内定承諾率も向上しました。",
      company: "製造業A社",
      person: "採用担当 山田様",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "大手就活サイトでは埋もれがちでしたが、オルキャリの地域特化型イベントに参加したことで、地元志向の優秀な学生と接点を持つことができ、10名の内定に成功しました。",
      company: "IT企業B社",
      person: "人事部長 佐藤様",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "知名度に課題がありましたが、オルキャリのプロフィール充実と定期的な情報発信により、企業認知度が向上。応募数が2倍になり、採用活動の効率化に成功しました。",
      company: "サービス業C社",
      person: "代表取締役 鈴木様",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="flex flex-col">
      <ServiceHero title="FOR COMPANIES" subtitle="企業の方へ" />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">東海地方の優秀な学生との出会いをサポート</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            オルキャリは東海地方特化型の新卒採用サービスです。地元で就職を希望する学生と企業をつなぎ、効果的な採用活動を実現します。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-brand-orange hover:bg-brand-orange/90" size="lg" asChild>
              <Link href="/for-companies/register">無料で企業登録する</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                資料請求・お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">オルキャリの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-16 w-16 mb-4">
                      <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} fill className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
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
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.recommended ? "bg-brand-orange hover:bg-brand-orange/90" : ""
                    }`}
                    variant={plan.recommended ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/for-companies/register">申し込む</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            ※ 料金は全て税抜表示です。別途、初期設定費用（50,000円）がかかります。
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">導入企業の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-16 w-16 mb-4">
                      <Image src={testimonial.logo || "/placeholder.svg"} alt={testimonial.company} fill className="object-contain" />
                    </div>
                    <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.company}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.person}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-brand-lightgray rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">まずは無料で企業登録</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              企業登録は無料です。登録後、専任のコンサルタントが貴社の採用課題をヒアリングし、最適なプランをご提案します。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90" size="lg" asChild>
                <Link href="/for-companies/register">無料で企業登録する</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  資料請求・お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Q. 料金プランはいつでも変更できますか？</h3>
                <p className="text-muted-foreground">
                  A.
                  はい、いつでもプランの変更が可能です。ただし、契約期間中のダウングレードの場合は、差額の返金はございません。アップグレードの場合は、日割り計算で差額をご請求いたします。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Q. 最低契約期間はありますか？</h3>
                <p className="text-muted-foreground">
                  A. 最低契約期間は3ヶ月となります。3ヶ月以降は1ヶ月単位での更新となります。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Q. 掲載できる求人の条件はありますか？</h3>
                <p className="text-muted-foreground">
                  A.
                  新卒採用（大学・大学院・専門学校の卒業予定者向け）の正社員求人のみ掲載可能です。アルバイトやインターンシップの掲載をご希望の場合は、別途ご相談ください。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Q. 対応エリアはどこですか？</h3>
                <p className="text-muted-foreground">
                  A. 主に愛知県、岐阜県、三重県、静岡県の東海4県を中心としたエリアの企業様にご利用いただいております。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Q. 登録学生の属性を教えてください</h3>
                <p className="text-muted-foreground">
                  A.
                  東海地方の大学・専門学校に通う学生を中心に、約15,000名が登録しています。文系・理系ともにバランスよく登録しており、地元志向の強い学生が多いのが特徴です。
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/faq">その他のよくある質問を見る</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
