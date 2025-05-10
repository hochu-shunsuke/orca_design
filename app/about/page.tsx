import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, PieChart, Calendar, User, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServiceHero from "@/components/service-hero"
import ServiceCta from "@/components/service-cta"
import ServiceFeatureCard from "@/components/service-feature-card"
import ServiceCaseCard from "@/components/service-case-card"
import ServiceFlowStep from "@/components/service-flow-step"

export const metadata: Metadata = {
  title: "オルキャリについて | 東海地方の新卒就活サービス",
  description:
    "オルキャリは東海地方の学生と企業をつなぐ新卒就活サービスです。サービスの特徴や導入事例についてご紹介します。",
}

export default function AboutPage() {
  const challenges = [
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "優秀な学生を採用したいが学生の反応が良くない",
    },
    {
      icon: <PieChart className="h-12 w-12" />,
      title: "採用コストを抑えつつ効果的に採用活動を行いたい",
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "効果的な学生と接触する機会や良いイベントが少ない",
    },
  ]

  const features = [
    {
      icon: <User className="h-12 w-12" />,
      title: "地方特化の採用支援で好評価",
      description:
        "東海地方の大学や専門学校と強いパイプを持ち、地元で就職を希望する学生にリーチできます。地域に根差した採用活動をサポートします。",
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "東海エリアの学生層に強い",
      description:
        "名古屋大学をはじめとする東海地方の主要大学の学生が多数登録。地元企業への就職を希望する優秀な学生層にアプローチできます。",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "就活イベント",
      description:
        "東海地方各所で定期的に合同企業説明会やセミナーを開催。対面での学生とのコミュニケーション機会を提供し、採用活動をサポートします。",
    },
  ]

  const cases = [
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "採用に課題を抱えていた製造業A社の事例",
      description:
        "オルキャリを活用することで、地元の理系学生へのアプローチが強化され、エンジニア職の応募者が前年比150%に増加。採用コストを30%削減しながら、内定承諾率も向上しました。",
    },
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "大学のイベントでは出会えなかった学生層へのアプローチ",
      description:
        "大手就活サイトでは埋もれがちだったB社が、オルキャリの地域特化型イベントに参加。地元志向の優秀な学生と接点を持ち、10名の内定に成功しました。",
    },
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "効果的なブランディングの事例",
      description:
        "知名度に課題があったC社が、オルキャリのプロフィール充実と定期的な情報発信により、企業認知度が向上。応募数が2倍になり、採用活動の効率化に成功しました。",
    },
  ]

  const flowSteps = [
    {
      title: "お問合せ・ご相談",
      description: "まずはお気軽にお問い合わせください",
    },
    {
      title: "ヒアリング",
      description: "貴社の採用ニーズをお聞かせください",
    },
    {
      title: "ご提案",
      description: "最適な採用プランをご提案します",
    },
    {
      title: "イベント・施策の実施",
      description: "効果的な採用活動を実施します",
    },
    {
      title: "採用結果 & フォローアップ",
      description: "結果を分析し、次年度の改善につなげます",
    },
  ]

  return (
    <div className="flex flex-col">
      <ServiceHero title="SERVICE" subtitle="サービス" />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">こんな課題はありませんか？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-2">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center">
                  <div className="mb-4">{challenge.icon}</div>
                  <p className="font-medium">{challenge.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <ServiceCta />

        <section className="my-16">
          <h2 className="text-2xl font-bold text-center mb-8">特徴</h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <ServiceFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <ServiceCta />

        <section className="my-16">
          <h2 className="text-2xl font-bold text-center mb-8">導入事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <ServiceCaseCard
                key={index}
                icon={caseItem.icon}
                title={caseItem.title}
                description={caseItem.description}
              />
            ))}
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-2xl font-bold text-center mb-8">ご利用の流れ</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {flowSteps.map((step, index) => (
              <ServiceFlowStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === flowSteps.length - 1}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[300px]">
          <Image src="/placeholder.svg?height=300&width=600" alt="会社情報" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold mb-4">COMPANY</h2>
            <p className="mb-6">会社情報</p>
            <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
              <Link href="/about/company">詳細を見る</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px]">
          <Image src="/placeholder.svg?height=300&width=600" alt="お問い合わせ" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
            <p className="mb-6">お問い合わせ</p>
            <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
              <Link href="/contact">詳細を見る</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
