"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Card className="w-full mt-[-50px] relative z-10 shadow-lg border-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl text-center">求人検索</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="keyword" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="keyword">キーワード</TabsTrigger>
            <TabsTrigger value="area">エリア</TabsTrigger>
            <TabsTrigger value="industry">業種・職種</TabsTrigger>
          </TabsList>

          <TabsContent value="keyword" className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="キーワードで検索（職種、会社名、スキルなど）"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="sm:w-auto w-full bg-brand-orange hover:bg-brand-orange/90">検索</Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button variant="outline" size="sm" className="rounded-full">
                プログラミング
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                営業職
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                名古屋市
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                未経験歓迎
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                リモートワーク
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="area" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">都道府県</span>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="都道府県を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aichi">愛知県</SelectItem>
                    <SelectItem value="gifu">岐阜県</SelectItem>
                    <SelectItem value="mie">三重県</SelectItem>
                    <SelectItem value="shizuoka">静岡県</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">市区町村</span>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="市区町村を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nagoya">名古屋市</SelectItem>
                    <SelectItem value="toyota">豊田市</SelectItem>
                    <SelectItem value="okazaki">岡崎市</SelectItem>
                    <SelectItem value="toyohashi">豊橋市</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">エリアで検索</Button>
          </TabsContent>

          <TabsContent value="industry" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">業種</span>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="業種を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT・通信</SelectItem>
                    <SelectItem value="manufacturing">製造業</SelectItem>
                    <SelectItem value="finance">金融・保険</SelectItem>
                    <SelectItem value="retail">小売・流通</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">職種</span>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="職種を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineer">エンジニア</SelectItem>
                    <SelectItem value="sales">営業</SelectItem>
                    <SelectItem value="marketing">マーケティング</SelectItem>
                    <SelectItem value="hr">人事・総務</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">業種・職種で検索</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
