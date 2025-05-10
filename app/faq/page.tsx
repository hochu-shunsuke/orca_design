import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "よくある質問 | オルキャリ",
  description: "オルキャリに関するよくある質問と回答をご紹介します。",
}

export default function FaqPage() {
  const faqCategories = [
    {
      id: "students",
      title: "学生の方向け",
      items: [
        {
          question: "オルキャリの利用は無料ですか？",
          answer: "はい、学生の方は完全無料でご利用いただけます。会員登録後、すべての機能をご利用いただけます。",
        },
        {
          question: "会員登録にはどのような情報が必要ですか？",
          answer:
            "基本情報（氏名、メールアドレス、大学名、学部・学科、卒業予定年）の入力が必要です。より詳細なプロフィール情報を入力することで、あなたに合った求人情報をご紹介できます。",
        },
        {
          question: "求人への応募方法を教えてください",
          answer:
            "気になる求人の詳細ページから「応募する」ボタンをクリックし、必要事項を入力して応募できます。応募状況はマイページの「応募管理」から確認できます。",
        },
        {
          question: "イベントの参加方法を教えてください",
          answer:
            "イベント一覧から参加したいイベントを選び、詳細ページの「予約する」ボタンから予約できます。予約状況はマイページの「イベント予約」から確認できます。",
        },
        {
          question: "企業からスカウトは来ますか？",
          answer:
            "はい、プロフィールを充実させることで企業からスカウトを受け取る可能性が高まります。スカウトはメールとマイページの「メッセージ」から確認できます。",
        },
      ],
    },
    {
      id: "companies",
      title: "企業の方向け",
      items: [
        {
          question: "オルキャリに求人を掲載するにはどうすればよいですか？",
          answer:
            "企業会員登録後、管理画面から求人情報を入力・掲載できます。掲載プランによって掲載できる求人数や機能が異なります。詳しくは「企業向けプラン」ページをご確認ください。",
        },
        {
          question: "料金プランについて教えてください",
          answer:
            "ライトプラン（月額3万円）、スタンダードプラン（月額5万円）、プレミアムプラン（月額10万円）の3つのプランをご用意しています。各プランの詳細は「企業向けプラン」ページをご確認ください。",
        },
        {
          question: "学生へのスカウト機能はありますか？",
          answer:
            "はい、スタンダードプラン以上で学生へのスカウト機能をご利用いただけます。条件検索で該当する学生を絞り込み、メッセージを送ることができます。",
        },
        {
          question: "イベントへの参加方法を教えてください",
          answer:
            "オルキャリ主催のイベントには、管理画面から参加申し込みができます。参加費用はプランによって異なります。自社イベントの掲載はプレミアムプランでのみ可能です。",
        },
        {
          question: "掲載した求人の効果測定はできますか？",
          answer:
            "はい、管理画面から閲覧数、お気に入り登録数、応募数などの統計情報を確認できます。プレミアムプランではより詳細な分析レポートをご利用いただけます。",
        },
      ],
    },
    {
      id: "service",
      title: "サービスについて",
      items: [
        {
          question: "オルキャリはどのような会社が運営していますか？",
          answer:
            "株式会社オルキャリが運営しています。2020年に設立され、東海地方の学生と企業をつなぐ就活サービスとして展開しています。詳しくは「会社情報」ページをご確認ください。",
        },
        {
          question: "対応エリアはどこですか？",
          answer: "主に愛知県、岐阜県、三重県、静岡県の東海4県を中心としたエリアの求人情報を掲載しています。",
        },
        {
          question: "イベントはオンラインでも参加できますか？",
          answer:
            "はい、対面イベントとオンラインイベントの両方を開催しています。イベント詳細ページで開催形式をご確認ください。",
        },
        {
          question: "個人情報の取り扱いについて教えてください",
          answer:
            "当社は個人情報保護法を遵守し、適切に個人情報を管理しています。詳しくは「プライバシーポリシー」をご確認ください。",
        },
        {
          question: "問い合わせ方法を教えてください",
          answer:
            "「お問い合わせ」ページのフォームから、または電話（052-123-4567）、メール（info@olcareer.jp）でお問い合わせいただけます。",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-brand-orange">
          ホーム
        </Link>
        <span>/</span>
        <span>よくある質問</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">よくある質問</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {faqCategories.map((category) => (
          <Card key={category.id} className="hover:shadow-md transition-all">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">{category.title}</h2>
              <p className="text-muted-foreground mb-4">{category.items.length}件の質問</p>
              <Link href={`#${category.id}`} className="text-brand-orange hover:underline flex items-center">
                質問を見る
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        {faqCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-brand-orange pl-4">{category.title}</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      <div className="mt-12 bg-brand-lightgray rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-4">お探しの回答が見つかりませんでしたか？</h2>
        <p className="mb-6">お気軽にお問い合わせください。担当者が丁寧にお答えします。</p>
        <Link
          href="/contact"
          className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-md"
        >
          お問い合わせ
        </Link>
      </div>
    </div>
  )
}
