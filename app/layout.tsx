import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { UserProvider } from "@/components/providers/user-provider"
import { auth0 } from "@/lib/auth0"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "オルキャリ | 東海地方の新卒就活サービス",
  description: "東海地方の学生と企業をつなぐ新卒就活サービス",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>){
  const session = await auth0.getSession(); // auth0 インスタンスからセッションを取得
  const user = session?.user ?? null; // セッションからユーザー情報を取得

  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <UserProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar user={user} /> {/* Navbarにuser情報を渡す */}
              
              {/* ✅ デバッグ用ナビゲーション */}
              <div className="bg-yellow-100 px-4 py-2 flex gap-4 text-sm text-black font-medium">
                <p>デバッグ用ナビゲーション</p>
                <Link href="/ssr" className="underline hover:text-blue-600">SSRページへ</Link>
                <Link href="/csr" className="underline hover:text-blue-600">CSRページへ</Link>
                <Link href="/protected" className="underline hover:text-blue-600">保護ページへ</Link>
                </div>
              {/* ここまで */}

              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
