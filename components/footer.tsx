import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">オルキャリ</h3>
            <p className="text-sm text-gray-300 mb-4">東海地方の学生と企業をつなぐ新卒就活サービス</p>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">求人を探す</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white">
                  求人一覧
                </Link>
              </li>
              <li>
                <Link href="/jobs/aichi" className="text-gray-300 hover:text-white">
                  愛知県の求人
                </Link>
              </li>
              <li>
                <Link href="/jobs/gifu" className="text-gray-300 hover:text-white">
                  岐阜県の求人
                </Link>
              </li>
              <li>
                <Link href="/jobs/mie" className="text-gray-300 hover:text-white">
                  三重県の求人
                </Link>
              </li>
              <li>
                <Link href="/jobs/shizuoka" className="text-gray-300 hover:text-white">
                  静岡県の求人
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">企業の方へ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/for-companies" className="text-gray-300 hover:text-white">
                  サービス紹介
                </Link>
              </li>
              <li>
                <Link href="/for-companies/pricing" className="text-gray-300 hover:text-white">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="/for-companies/register" className="text-gray-300 hover:text-white">
                  企業登録
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">サイト情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  オルキャリについて
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} オルキャリ All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
