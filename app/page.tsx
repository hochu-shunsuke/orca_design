import HeroSlider from "@/components/hero-slider"
import NotificationBanner from "@/components/notification-banner"
import SearchSection from "@/components/search-section"
import JobCardGrid from "@/components/job-card-grid"
import FeaturedCompanies from "@/components/featured-companies"
import ServiceFeatures from "@/components/service-features"
import EventCardFeatured from "@/components/events/event-card-featured"
import EventCardNormal from "@/components/events/event-card-normal"

// コンテンツデータ
import { featuredJobs, heroImages, notifications } from "@/mock-data/app/data"
import { events } from "@/mock-data/events/data"

export default function Home() {
  // 現在表示する通知（実際のアプリでは状態管理や条件に基づいて選択）
  const currentNotification = notifications[0]

  // 注目のイベントのモックデータをフィルタして（featured = true）取得
  const featuredEvents = events.filter(event => event.featured)

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
        {/* 近日開催のイベント */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">近日開催のイベント(横長ver)</h2>
          <div className="space-y-6">
            {featuredEvents.map((event) => (
              <EventCardFeatured key={event.id} event={event} />
            ))}
          </div>
          
          {/* 通常のイベントカード */}
          <h2 className="text-3xl font-bold mb-8 text-center">近日開催のイベント(縦長ver)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredEvents.map((event) => (
              <EventCardNormal key={`normal-${event.id}`} event={event} />
            ))}
          </div>
        </section>

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
