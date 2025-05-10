import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">新規登録</CardTitle>
          <CardDescription className="text-center">必要情報を入力して新規アカウントを作成してください</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">姓</Label>
              <Input id="firstName" placeholder="山田" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">名</Label>
              <Input id="lastName" placeholder="太郎" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" placeholder="example@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">パスワード</Label>
            <Input id="password" type="password" />
            <p className="text-xs text-muted-foreground">8文字以上で、英字・数字を含めてください</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">パスワード（確認）</Label>
            <Input id="confirmPassword" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">大学名</Label>
            <Input id="university" placeholder="○○大学" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="graduationYear">卒業予定年</Label>
            <Select>
              <SelectTrigger id="graduationYear">
                <SelectValue placeholder="卒業予定年を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025年</SelectItem>
                <SelectItem value="2026">2026年</SelectItem>
                <SelectItem value="2027">2027年</SelectItem>
                <SelectItem value="2028">2028年</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              <span>
                <Link href="/terms" className="text-primary hover:underline">
                  利用規約
                </Link>
                と
                <Link href="/privacy" className="text-primary hover:underline ml-1">
                  プライバシーポリシー
                </Link>
                に同意します
              </span>
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">アカウント作成</Button>
          <div className="text-center text-sm">
            すでにアカウントをお持ちの方は
            <Link href="/login" className="text-primary hover:underline ml-1">
              ログイン
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
