    // ダミーデータ（実際の関数は別途定義される）
export const user = {
    name: "山田 太郎",
    university: "名古屋大学",
    department: "工学部",
    graduationYear: "2026年",
    email: "yamada@example.com",
    profileCompletion: 75,
    appliedJobs: 8,
    favoriteJobs: 12,
    unreadMessages: 3,
    upcomingEvents: 2,
}

export const appliedJobs = [
    {
    id: "1",
    title: "ITエンジニア",
    company: "テクノ株式会社",
    location: "名古屋市中区",
    logo: "/placeholder.svg?height=60&width=60",
    status: "書類選考中",
    appliedDate: "2025/4/15",
    },
    {
    id: "2",
    title: "営業職",
    company: "東海商事",
    location: "静岡市葵区",
    logo: "/placeholder.svg?height=60&width=60",
    status: "一次面接通過",
    appliedDate: "2025/4/10",
    },
    {
    id: "3",
    title: "総合職",
    company: "中部産業",
    location: "岐阜市",
    logo: "/placeholder.svg?height=60&width=60",
    status: "二次面接予定",
    appliedDate: "2025/4/5",
    interviewDate: "2025/5/10",
    },
]

export const favoriteJobs = [
    {
    id: "4",
    title: "マーケティング",
    company: "三河デジタル",
    location: "豊橋市",
    logo: "/placeholder.svg?height=60&width=60",
    },
    {
    id: "5",
    title: "人事",
    company: "東海人材",
    location: "名古屋市中村区",
    logo: "/placeholder.svg?height=60&width=60",
    },
    {
    id: "6",
    title: "研究開発",
    company: "中部研究所",
    location: "浜松市中区",
    logo: "/placeholder.svg?height=60&width=60",
    },
]

export const upcomingEvents = [
    {
    id: "1",
    title: "合同企業説明会 in 名古屋",
    date: "2025年5月15日",
    time: "13:00〜17:00",
    location: "名古屋国際会議場",
    },
    {
    id: "2",
    title: "IT業界研究セミナー",
    date: "2025年5月20日",
    time: "14:00〜16:00",
    location: "オンライン開催",
    },
]

export const recentMessages = [
    {
    id: "1",
    from: "テクノ株式会社",
    subject: "書類選考結果のお知らせ",
    date: "2025/4/20",
    isRead: false,
    },
    {
    id: "2",
    from: "東海商事",
    subject: "一次面接のご案内",
    date: "2025/4/18",
    isRead: false,
    },
    {
    id: "3",
    from: "オルキャリ事務局",
    subject: "プロフィール入力のお願い",
    date: "2025/4/15",
    isRead: false,
    },
]