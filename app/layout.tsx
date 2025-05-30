import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Auth0Provider } from "@auth0/nextjs-auth0"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "オルキャリ | 東海地方の新卒就活サービス",
  description: "東海地方の学生と企業をつなぐ新卒就活サービス",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Auth0Provider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              
              {/* ✅ デバッグ用ナビゲーション */}
              <div className="bg-yellow-100 px-4 py-2 flex gap-4 text-sm text-black font-medium">
                <p>デバッグ用ナビゲーション</p>
                <Link href="/debug/cookies" className="underline hover:text-blue-600">🍪 Cookie Debug</Link>
                <Link href="/ssr" className="underline hover:text-blue-600">SSRページへ</Link>
                <Link href="/csr" className="underline hover:text-blue-600">CSRページへ</Link>
                <Link href="/protected" className="underline hover:text-blue-600">保護ページへ</Link>
                <Link href="/debug/auth-supabase-test" className="underline hover:text-blue-600">Auth0+Supabase連携テスト</Link>
              </div>
              {/* ここまで */}

              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Auth0Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
