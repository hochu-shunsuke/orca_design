import { Search, Building, Calendar, Users, Award, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServiceFeatures() {
  const features = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "簡単求人検索",
      description: "東海地方の企業の求人情報を簡単に検索できます。",
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "地元企業の情報",
      description: "東海地方の優良企業の詳細情報を提供しています。",
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "就活イベント",
      description: "合同企業説明会やセミナーなどのイベント情報を掲載。",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "OB・OG訪問",
      description: "企業で働く先輩との交流の機会を提供します。",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "ES・面接対策",
      description: "エントリーシートや面接の対策情報を提供します。",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "就活ノウハウ",
      description: "就活に役立つ情報やアドバイスを掲載しています。",
    },
  ]

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">オルキャリの特徴</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-2">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 text-brand-orange">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
