import type { Metadata } from "next"
import { Clock, Calendar, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "インターンシップガイド | オルキャリ",
  description: "インターンシップの選び方や活かし方、成功のポイントを解説します。",
}

export default function InternshipGuidePage() {
  const guideCategories = [
    {
      id: "basics",
      title: "インターンシップの基礎知識",
      icon: <BookOpen className="h-8 w-8 text-brand-orange" />,
      items: [
        {
          title: "インターンシップとは",
          description: "学生が企業で一定期間、実務経験を積む制度です。就業体験を通じて、業界や職種への理解を深め、自身のキャリアを考えるきっかけになります。",
        },
        {
          title: "長期インターンシップのメリット",
          description: "3ヶ月以上の長期インターンシップでは、実践的なスキルを身につけ、本格的なプロジェクトに参加できる機会が増えます。就活時のアピールポイントにもなります。",
        },
        {
          title: "インターンシップの種類",
          description: "職種（エンジニア、マーケティング、営業など）や期間（短期・長期）、勤務形態（オフィス・リモート・ハイブリッド）など、様々な種類があります。",
        },
      ],
    },
    {
      id: "preparation",
      title: "インターンシップの準備",
      icon: <Calendar className="h-8 w-8 text-brand-orange" />,
      items: [
        {
          title: "自己分析と目標設定",
          description: "自分のスキルや興味を整理し、インターンシップで何を得たいのかを明確にしましょう。目標があると、より充実した経験になります。",
        },
        {
          title: "応募書類の書き方",
          description: "志望動機は具体的に書き、自分がどのように貢献できるかをアピールしましょう。企業研究をしっかり行い、その企業でなければならない理由を伝えることが重要です。",
        },
        {
          title: "面接対策",
          description: "インターンシップの面接では、学生の意欲や基本的なコミュニケーション能力が重視されます。自分の強みや学びたいことを明確に伝えられるよう準備しましょう。",
        },
      ],
    },
    {
      id: "during",
      title: "インターン中の過ごし方",
      icon: <Clock className="h-8 w-8 text-brand-orange" />,
      items: [
        {
          title: "積極的な姿勢を持つ",
          description: "分からないことは質問し、与えられた仕事以外にも自ら提案するなど、積極的に行動しましょう。受け身ではなく主体的に取り組むことが重要です。",
        },
        {
          title: "メモを取る習慣",
          description: "説明や指示は必ずメモを取り、後で確認できるようにしましょう。業務の流れや専門用語なども記録しておくと、理解が深まります。",
        },
        {
          title: "社会人としてのマナー",
          description: "時間厳守、適切な服装、丁寧な言葉遣いなど、社会人としての基本的なマナーを守りましょう。第一印象は重要です。",
        },
      ],
    },
    {
      id: "after",
      title: "インターンシップの活かし方",
      icon: <Award className="h-8 w-8 text-brand-orange" />,
      items: [
        {
          title: "振り返りと自己評価",
          description: "インターンシップ終了後は、学んだことや達成したこと、課題を整理しましょう。この振り返りが次のステップにつながります。",
        },
        {
          title: "就活での活かし方",
          description: "インターンシップでの経験は、就活のエントリーシートや面接で具体的なエピソードとして活用できます。成果や学びを数字や具体例で説明できるようにしましょう。",
        },
        {
          title: "人脈の構築",
          description: "インターンシップで出会った社員や他のインターン生との関係を大切にしましょう。業界の情報収集や就活時の相談など、様々な場面で役立ちます。",
        },
      ],
    },
  ]

  const successStories = [
    {
      name: "田中さん（名古屋大学3年）",
      company: "テクノ株式会社",
      position: "Webエンジニアインターン",
      story: "週3日、半年間のインターンシップを経験。実際のプロジェクトに参加し、フロントエンド開発のスキルを習得。インターン終了後、本採用内定を獲得しました。",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "佐藤さん（静岡大学4年）",
      company: "三河デジタル",
      position: "マーケティングインターン",
      story: "週2日、9ヶ月間のインターンシップを経験。\
nSNSマーケティングやデータ分析の業務を担当。実績を上げ、インターン終了後に正社員として内定をもらいました。",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "鈴木さん（岐阜大学2年）",
      company: "中部産業",
      position: "営業インターン",
      story: "週1日の短期インターンシップを経験。\n営業の基礎を学び、実際の商談にも同行。\
nコミュニケーション能力が向上し、就活での面接対策にも役立ちました。",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">インターンシップガイド</h1>
      <p className="text-lg text-muted-foreground mb-8">
        インターンシップの選び方や活かし方、成功のポイントを解説します。
      </p>

      <div className="space-y-12">
        {guideCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              {category.icon}
              {category.title}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {category.items.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">成功事例</h2>
          {successStories.map((story, index) => (
            <div key={index} className="flex items-start gap-4">
              <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full" />
              <div>
                <h3 className="font-bold">{story.name}</h3>
                <p className="text-sm text-muted-foreground">{story.company} - {story.position}</p>
                <p>{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}