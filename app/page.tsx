import HeroSlider from "@/components/hero-slider"
import NotificationBanner from "@/components/notification-banner"
import SearchSection from "@/components/search-section"
import JobCardGrid from "@/components/job-card-grid"
import FeaturedCompanies from "@/components/featured-companies"
import ServiceFeatures from "@/components/service-features"

export default function Home() {
  // ダミーデータ（実際の関数は別途定義される）
  const featuredJobs = [
    {
      id: "1",
      title: "ITエンジニア",
      company: "テクノ株式会社",
      location: "名古屋市中区",
      salary: "月給22万円〜",
      tags: ["IT", "プログラミング", "名古屋"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      title: "営業職",
      company: "東海商事",
      location: "静岡市葵区",
      salary: "月給20万円〜",
      tags: ["営業", "法人営業", "静岡"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "3",
      title: "総合職",
      company: "中部産業",
      location: "岐阜市",
      salary: "月給21万円〜",
      tags: ["総合職", "岐阜"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "4",
      title: "マーケティング",
      company: "三河デジタル",
      location: "豊橋市",
      salary: "月給20万円〜",
      tags: ["マーケティング", "デジタル", "愛知"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "5",
      title: "人事",
      company: "東海人材",
      location: "名古屋市中村区",
      salary: "月給19万円〜",
      tags: ["人事", "採用", "名古屋"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "6",
      title: "研究開発",
      company: "中部研究所",
      location: "浜松市中区",
      salary: "月給23万円〜",
      tags: ["研究", "開発", "静岡"],
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  // ヒーロースライダー用の画像配列
  const heroImages = [
    {
      src: "/image/orcareer.png?height=600&width=1200",
      alt: "東海地方の就活生を応援",
      title: "",
      subtitle: "",
      blur: false, // ぼかしなし
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "あなたの可能性を広げよう",
      title: "あなたの可能性を広げよう",
      subtitle: "東海地方の優良企業があなたを待っています",
      blur: true, // ぼかしあり
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "キャリアの第一歩を踏み出そう",
      title: "キャリアの第一歩を踏み出そう",
      subtitle: "オルキャリがあなたの就活をサポートします",
      blur: false, // ぼかしなし
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "理想の職場を見つけよう",
      title: "理想の職場を見つけよう",
      subtitle: "あなたの希望に合った企業との出会いを",
      blur: true, // ぼかしあり
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "地域に根差したキャリア",
      title: "地域に根差したキャリア",
      subtitle: "東海地方で自分らしく働く未来を描こう",
      blur: false, // ぼかしなし
    },
  ]

  // お知らせバナー用のデータ配列
  const notifications = [
    {
      type: "info" as const,
      title: "合同企業説明会開催のお知らせ",
      message: "5月15日に名古屋国際会議場で合同企業説明会を開催します。ぜひご参加ください。",
      dismissible: true,
    },
    {
      type: "alert" as const,
      title: "システムメンテナンスのお知らせ",
      message: "5月10日 深夜1:00〜3:00はシステムメンテナンスのため一部機能がご利用いただけません。",
      dismissible: true,
    },
    {
      type: "info" as const,
      title: "新機能リリースのお知らせ",
      message: "企業とのマッチング精度が向上する新機能をリリースしました。ぜひご活用ください。",
      dismissible: false,
    },
  ]

  // 現在表示する通知（実際のアプリでは状態管理や条件に基づいて選択）
  const currentNotification = notifications[0]

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* お知らせバナー */}
      <NotificationBanner
        type={currentNotification.type}
        title={currentNotification.title}
        message={currentNotification.message}
        dismissible={currentNotification.dismissible}
      />

      {/* ヒーロースライダー - ぼかし効果を有効化 */}
      <HeroSlider images={heroImages} enableBlur={true} />

      <div className="container mx-auto px-4">
        <SearchSection />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">注目の求人</h2>
          <JobCardGrid jobs={featuredJobs} />
        </section>

        <FeaturedCompanies />

        <ServiceFeatures />
      </div>
    </div>
  )
}
