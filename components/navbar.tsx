"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="メニュー">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">
                  ホーム
                </Link>
                <Link href="/jobs" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">
                  求人検索
                </Link>
                <Link href="/companies" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">
                  企業一覧
                </Link>
                <Link href="/events" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">
                  イベント
                </Link>
                <Link href="/about" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">
                  オルキャリについて
                </Link>
                <div className="mt-4 border-t pt-4">
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                    <Link href="/login">ログイン</Link>
                  </Button>
                  <Button className="w-full mt-2" variant="outline" asChild>
                    <Link href="/register">新規登録</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            {/* 小さいロゴ（モバイル用） */}
            <div className="sm:hidden">
              <Image
                src="/logo-orca.webp"
                alt="オルキャリロゴ"
                width={100} // モバイルでも見えるように拡大
                height={0}  // 高さは自動調整
                priority
              />
            </div>

            {/* フルロゴ（PC用） */}
            <div className="hidden sm:block">
              <Image
                src="/logo-orca.webp"
                alt="オルキャリロゴ"
                width={140} // PCでは大きめに表示
                height={0}  // 高さは自動で比率保持
                priority
              />
            </div>
          </Link>

        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-brand-orange">
            ホーム
          </Link>
          <Link href="/jobs" className="text-sm font-medium hover:text-brand-orange">
            求人検索
          </Link>
          <Link href="/companies" className="text-sm font-medium hover:text-brand-orange">
            企業一覧
          </Link>
          <Link href="/events" className="text-sm font-medium hover:text-brand-orange">
            イベント
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-brand-orange">
            オルキャリについて
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center gap-2 bg-background border rounded-md px-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                className="h-9 w-[180px] sm:w-[200px] bg-transparent border-none focus:outline-none text-sm"
                placeholder="キーワードで検索"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" aria-label="検索" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Button variant="ghost" size="icon" aria-label="通知">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" aria-label="アカウント" asChild>
            <Link href="/mypage">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <div className="hidden sm:flex gap-2 ml-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">ログイン</Link>
            </Button>
            <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
              <Link href="/register">新規登録</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
