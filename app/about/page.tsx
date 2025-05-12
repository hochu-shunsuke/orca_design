import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AboutHeroSlider from "@/components/about-hero-slider"
import AboutMissionCard from "@/components/about-mission-card"
import AboutFeatureCard from "@/components/about-feature-card"
import AboutTeamMember from "@/components/about-team-member"
import AboutHistoryItem from "@/components/about-history-item"

export const metadata: Metadata = {
  title: "オルキャリについて | 東海地方の新卒就活サービス",
  description:
    "オルキャリは東海地方の学生と企業をつなぐ新卒就活サービスです。サービスの特徴や導入事例についてご紹介します。",
}

export default function AboutPage() {
  // ヒーロースライダー用の画像配列
  const heroImages = [
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "オルキャリについて",
      title: "ABOUT OL CAREER",
      subtitle: "東海地方の就活を変える",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "私たちのミッション",
      title: "OUR MISSION",
      subtitle: "地域の可能性を広げる就職支援",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "オルキャリのチーム",
      title: "OUR TEAM",
      subtitle: "学生と企業の架け橋となる専門家集団",
    },
  ]

  // ミッション・ビジョン・バリュー
  const missions = [
    {
      title: "MISSION",
      subtitle: "私たちの使命",
      description: "東海地方の学生と企業をつなぎ、地域経済の活性化と若者の可能性を最大化する",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-amber-500",
    },
    {
      title: "VISION",
      subtitle: "私たちのビジョン",
      description: "東海地方No.1の就活プラットフォームとなり、地域に根差したキャリア形成を支援する",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-emerald-500",
    },
    {
      title: "VALUE",
      subtitle: "私たちの価値観",
      description: "地域密着・学生第一・企業成長・イノベーション・信頼関係",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-blue-500",
    },
  ]

  // 特徴
  const features = [
    {
      title: "地域特化型プラットフォーム",
      description:
        "東海地方（愛知・岐阜・三重・静岡）に特化した就活サービスとして、地元企業と学生をつなぎます。地域の特性や文化を理解した上で、最適なマッチングを実現します。",
      image: "/placeholder.svg?height=300&width=400",
      reverse: false,
    },
    {
      title: "高品質なマッチング",
      description:
        "独自のアルゴリズムと専門キャリアアドバイザーによる丁寧なサポートで、学生と企業の相性を重視したマッチングを提供。ミスマッチを減らし、長期的な関係構築を支援します。",
      image: "/placeholder.svg?height=300&width=400",
      reverse: true,
    },
    {
      title: "充実したイベント",
      description:
        "オンライン・オフライン両方で定期的に開催される企業説明会やセミナーは、学生と企業が直接交流できる貴重な機会です。地域密着型だからこそ実現できる濃密な交流の場を提供します。",
      image: "/placeholder.svg?height=300&width=400",
      reverse: false,
    },
  ]

  // チームメンバー
  const teamMembers = [
    {
      name: "山田 太郎",
      position: "代表取締役CEO",
      bio: "大手人材企業での10年の経験を経て、地元・東海地方の就活支援のためにオルキャリを創業。地域活性化に情熱を注ぐ。",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "佐藤 花子",
      position: "COO",
      bio: "複数のスタートアップの立ち上げに参画した経験を持つ。学生と企業の最適なマッチングを追求し、サービス品質の向上に取り組む。",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "鈴木 一郎",
      position: "CTO",
      bio: "IT企業でのエンジニア経験を活かし、使いやすいプラットフォームの開発をリード。最新技術を駆使したサービス改善に取り組む。",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "田中 美咲",
      position: "マーケティング責任者",
      bio: "広告代理店出身。東海地方の大学とのネットワークを構築し、学生と企業の双方に価値あるコンテンツを提供している。",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // 沿革
  const history = [
    {
      year: "2020年4月",
      title: "株式会社オルキャリ設立",
      description: "東海地方の就活支援を目的に、名古屋市中区に本社を設立",
    },
    {
      year: "2020年9月",
      title: "オルキャリβ版リリース",
      description: "限定された企業・学生向けにサービスを試験的に開始",
    },
    {
      year: "2021年4月",
      title: "オルキャリ正式版リリース",
      description: "本格的なサービス開始。登録企業100社、学生3,000名を突破",
    },
    {
      year: "2022年2月",
      title: "静岡オフィス開設",
      description: "静岡県内の大学・企業とのネットワーク強化のため、静岡市に拠点を設立",
    },
    {
      year: "2023年5月",
      title: "登録学生数10,000名突破",
      description: "東海地方の主要大学との連携強化により、登録学生数が大幅に増加",
    },
    {
      year: "2024年1月",
      title: "岐阜・三重オフィス開設",
      description: "サービスエリア拡大に伴い、岐阜市と津市に新たな拠点を設立",
    },
    {
      year: "2025年4月",
      title: "登録企業数500社突破",
      description: "地域に根差したサービスとして成長し、多くの企業に支持される",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* ヒーロースライダー */}
      <AboutHeroSlider images={heroImages} />

      <div className="container mx-auto px-4 py-16">
        {/* ミッション・ビジョン・バリュー */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">私たちの理念</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              オルキャリは「地域の可能性を広げる」という理念のもと、東海地方の学生と企業の架け橋となることを目指しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <AboutMissionCard
                key={index}
                title={mission.title}
                subtitle={mission.subtitle}
                description={mission.description}
                icon={mission.icon}
                color={mission.color}
              />
            ))}
          </div>
        </section>

        {/* 会社概要 */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">会社概要</h2>
              <p className="text-lg text-muted-foreground mb-6">
                オルキャリは2020年に設立された、東海地方特化型の新卒採用サービスです。地域に根差したサービスとして、学生と企業の最適なマッチングを実現しています。
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                現在、愛知・岐阜・三重・静岡の4県を中心に、500社以上の企業と15,000名以上の学生が登録。地域の特性を活かした独自のサービスで、多くの就職成功事例を生み出しています。
              </p>
              <Button className="bg-brand-orange hover:bg-brand-orange/90" size="lg" asChild>
                <Link href="/about/company">詳細を見る</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="オルキャリのオフィス"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">オルキャリの特徴</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              地域に特化したサービスだからこそ提供できる価値があります。
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <AboutFeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                reverse={feature.reverse}
              />
            ))}
          </div>
        </section>

        {/* チーム */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">私たちのチーム</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              オルキャリを支える多様なバックグラウンドを持つ専門家たち。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AboutTeamMember
                key={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </section>

        {/* 沿革 */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">沿革</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              オルキャリの成長の軌跡をご紹介します。
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-orange/20"></div>
              <div className="space-y-12">
                {history.map((item, index) => (
                  <AboutHistoryItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 数字で見るオルキャリ */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">数字で見るオルキャリ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              私たちのサービスの実績を数字でご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-brand-orange/20 hover:border-brand-orange transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-brand-orange mb-2">500+</div>
                <h3 className="text-xl font-semibold mb-2">登録企業数</h3>
                <p className="text-muted-foreground">東海地方の優良企業が参加</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-brand-orange/20 hover:border-brand-orange transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-brand-orange mb-2">15,000+</div>
                <h3 className="text-xl font-semibold mb-2">登録学生数</h3>
                <p className="text-muted-foreground">地元就職を希望する学生たち</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-brand-orange/20 hover:border-brand-orange transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-brand-orange mb-2">3,000+</div>
                <h3 className="text-xl font-semibold mb-2">内定獲得数</h3>
                <p className="text-muted-foreground">年間の就職成功事例</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-brand-orange/20 hover:border-brand-orange transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-brand-orange mb-2">120+</div>
                <h3 className="text-xl font-semibold mb-2">年間イベント数</h3>
                <p className="text-muted-foreground">オンライン・オフライン合計</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-brand-orange to-amber-500 rounded-xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">オルキャリで東海地方の就活を変えよう</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              学生の皆さんも、企業の皆さんも、ぜひオルキャリにご参加ください。
              地域に根差した就活サービスで、最適なマッチングを実現します。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-brand-orange hover:bg-white/90" size="lg" asChild>
                <Link href="/register">学生の方はこちら</Link>
              </Button>
              <Button className="bg-transparent border-2 border-white hover:bg-white/10" size="lg" asChild>
                <Link href="/for-companies">企業の方はこちら</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
