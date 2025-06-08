// 型定義
interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  address: string
  description: string
  image: string
  category: string
  capacity: string
  fee: string
  organizer: string
  status: string
  featured: boolean
  participatingCompanies: string[]
}

interface EventDetail extends Omit<Event, 'participatingCompanies'> {
  detailedDescription: string
  participatingCompanies: Company[]
}

interface Company {
  id: string
  name: string
  industry: string
  logo: string
}

interface RelatedEvent {
  id: string
  title: string
  date: string
  location: string
  image: string
}

// 一覧表示用のイベント
export const events: Event[] = [
    {
    id: "1",
    title: "合同企業説明会 in 名古屋",
    date: "2025年5月15日",
    time: "13:00〜17:00",
    location: "名古屋国際会議場",
    address: "愛知県名古屋市熱田区熱田西町1-1",
    description: "東海地方の優良企業50社が参加する合同企業説明会です。",
    image: "/placeholder.svg?height=200&width=400",
    category: "合同説明会",
    capacity: "500名",
    fee: "無料",
    organizer: "オルキャリ",
    status: "予約受付中",
    featured: true,
    participatingCompanies: ["テクノ株式会社", "東海商事", "中部産業", "三河デジタル", "東海人材"],
    },
    {
    id: "2",
    title: "IT業界研究セミナー",
    date: "2025年5月20日",
    time: "14:00〜16:00",
    location: "オンライン開催",
    address: "Zoomによるオンライン開催",
    description: "IT業界の最新動向や求められる人材像について解説します。",
    image: "/placeholder.svg?height=200&width=400",
    category: "セミナー",
    capacity: "100名",
    fee: "無料",
    organizer: "オルキャリ",
    status: "予約受付中",
    featured: true,
    participatingCompanies: ["テクノ株式会社", "三河デジタル"],
    },
    {
    id: "3",
    title: "東海地区 理系学生向け就職フェア",
    date: "2025年6月5日",
    time: "10:00〜18:00",
    location: "ポートメッセなごや",
    address: "愛知県名古屋市港区金城ふ頭2-2",
    description: "理系学生向けの就職フェアです。製造業を中心に多数の企業が参加します。",
    image: "/placeholder.svg?height=200&width=400",
    category: "就職フェア",
    capacity: "1000名",
    fee: "無料",
    organizer: "東海就活支援協会",
    status: "予約受付中",
    featured: true,
    participatingCompanies: ["中部産業", "中部研究所", "テクノ株式会社"],
    },
    {
    id: "4",
    title: "ES・面接対策講座",
    date: "2025年6月10日",
    time: "15:00〜17:00",
    location: "名古屋市中小企業振興会館",
    address: "愛知県名古屋市千種区吹上2-6-3",
    description: "エントリーシートの書き方や面接対策について、就活のプロが解説します。",
    image: "/placeholder.svg?height=200&width=400",
    category: "講座",
    capacity: "50名",
    fee: "無料",
    organizer: "オルキャリ",
    status: "予約受付中",
    featured: false,
    participatingCompanies: [],
    },
    {
    id: "5",
    title: "製造業界研究セミナー",
    date: "2025年6月15日",
    time: "13:30〜15:30",
    location: "岐阜市文化センター",
    address: "岐阜県岐阜市金町5-7-2",
    description: "東海地方の主要産業である製造業について、業界研究セミナーを開催します。",
    image: "/placeholder.svg?height=200&width=400",
    category: "セミナー",
    capacity: "80名",
    fee: "無料",
    organizer: "岐阜県就活支援センター",
    status: "予約受付中",
    featured: false,
    participatingCompanies: ["中部産業", "東海商事"],
    },
    {
    id: "6",
    title: "インターンシップフェア",
    date: "2025年6月20日",
    time: "11:00〜16:00",
    location: "アクトシティ浜松",
    address: "静岡県浜松市中区板屋町111-1",
    description: "夏季・冬季インターンシップの募集を行う企業が集まるフェアです。",
    image: "/placeholder.svg?height=200&width=400",
    category: "フェア",
    capacity: "300名",
    fee: "無料",
    organizer: "静岡県インターンシップ推進協会",
    status: "予約受付中",
    featured: false,
    participatingCompanies: ["中部研究所", "三河デジタル", "東海商事"],
    },
]

// 1件のイベント(詳細ページ用)
export const event: EventDetail = {
    id: "1",
    title: "合同企業説明会 in 名古屋",
    date: "2025年5月15日",
    time: "13:00〜17:00",
    location: "名古屋国際会議場",
    address: "愛知県名古屋市熱田区熱田西町1-1",
    description:
      "東海地方の優良企業50社が参加する合同企業説明会です。各企業のブースを自由に回り、企業の担当者から直接話を聞くことができます。就活生必見のイベントです。",
    detailedDescription: `
      <h3>イベント内容</h3>
      <p>東海地方を代表する優良企業50社が一堂に会する合同企業説明会です。各企業のブースを自由に回り、企業の担当者から直接話を聞くことができます。</p>
      
      <h3>参加企業</h3>
      <p>IT・通信、製造業、商社、金融、サービス業など、様々な業界から50社が参加予定です。参加企業の詳細は随時更新します。</p>
      
      <h3>対象者</h3>
      <p>2026年卒業予定の大学生・大学院生</p>
      
      <h3>持ち物</h3>
      <p>筆記用具、メモ帳、学生証</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "合同説明会",
    capacity: "500名",
    fee: "無料",
    organizer: "オルキャリ",
    status: "予約受付中",
    featured: true,
    participatingCompanies: [
      {
        id: "1",
        name: "テクノ株式会社",
        industry: "IT・通信",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "2",
        name: "東海商事",
        industry: "商社",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "3",
        name: "中部産業",
        industry: "製造業",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "4",
        name: "三河デジタル",
        industry: "IT・通信",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "5",
        name: "東海人材",
        industry: "人材サービス",
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
}

// 関連イベント（ダミーデータ）
export const relatedEvents: RelatedEvent[] = [
    {
      id: "2",
      title: "IT業界研究セミナー",
      date: "2025年5月20日",
      location: "オンライン開催",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "3",
      title: "東海地区 理系学生向け就職フェア",
      date: "2025年6月5日",
      location: "ポートメッセなごや",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "4",
      title: "ES・面接対策講座",
      date: "2025年6月10日",
      location: "名古屋市中小企業振興会館",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]