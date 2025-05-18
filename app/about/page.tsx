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

// コンテンツデータ
import { aboutHeroImages, aboutMissions, aboutFeatures, aboutTeamMembers, aboutHistory } from "@/mock-data/about/data"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ヒーロースライダー */}
      <AboutHeroSlider images={aboutHeroImages} />

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
            {aboutMissions.map((mission, index) => (
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
            {aboutFeatures.map((feature, index) => (
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
            {aboutTeamMembers.map((member, index) => (
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
                {aboutHistory.map((item, index) => (
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
