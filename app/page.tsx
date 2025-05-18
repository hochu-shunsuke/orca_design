import HeroSlider from "@/components/hero-slider"
import NotificationBanner from "@/components/notification-banner"
import SearchSection from "@/components/search-section"
import JobCardGrid from "@/components/job-card-grid"
import FeaturedCompanies from "@/components/featured-companies"
import ServiceFeatures from "@/components/service-features"

// コンテンツデータ
import { featuredJobs, heroImages, notifications } from "@/mock-data/app/data"

export default function Home() {
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
