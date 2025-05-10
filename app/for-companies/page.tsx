import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "企業の方へ | オルキャリ",
  description: "オルキャリの企業向けサービスのご案内。東海地方の優秀な学生との出会いをサポートします。",
}

export default function ForCompaniesPage() {
  const features = [
    {
      title: "地域特化型採用プラットフォーム",
      description: "東海地方の大学・専門学校と強いパイプを持ち、地元で就職を希望する学生にリーチできます。",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "高いマッチング精度",
      description: "詳細なプロフィール情報と独自のマッチングアルゴリズムにより、企業と学生の相性を高精度で判定します。",
      \
