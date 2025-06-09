import { Button } from "@/components/ui/button"

export default function InternshipFilter() {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium mb-4">絞り込み条件</h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">対象卒業年度</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="year-27" className="mr-2" />
              <label htmlFor="year-27" className="text-sm">
                27卒（2027年3月卒業予定）
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="year-28" className="mr-2" />
              <label htmlFor="year-28" className="text-sm">
                28卒（2028年3月卒業予定）
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="year-29" className="mr-2" />
              <label htmlFor="year-29" className="text-sm">
                29卒（2029年3月卒業予定）
              </label>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">勤務形態</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="work-office" className="mr-2" />
              <label htmlFor="work-office" className="text-sm">
                オフィス勤務
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="work-remote" className="mr-2" />
              <label htmlFor="work-remote" className="text-sm">
                リモート可
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="work-hybrid" className="mr-2" />
              <label htmlFor="work-hybrid" className="text-sm">
                ハイブリッド
              </label>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">勤務日数</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="days-1" className="mr-2" />
              <label htmlFor="days-1" className="text-sm">
                週1日〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="days-2" className="mr-2" />
              <label htmlFor="days-2" className="text-sm">
                週2日〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="days-3" className="mr-2" />
              <label htmlFor="days-3" className="text-sm">
                週3日〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="days-4" className="mr-2" />
              <label htmlFor="days-4" className="text-sm">
                週4日〜
              </label>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">期間</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="period-3m" className="mr-2" />
              <label htmlFor="period-3m" className="text-sm">
                3ヶ月〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="period-6m" className="mr-2" />
              <label htmlFor="period-6m" className="text-sm">
                6ヶ月〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="period-1y" className="mr-2" />
              <label htmlFor="period-1y" className="text-sm">
                1年〜
              </label>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">エリア</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="area-aichi" className="mr-2" />
              <label htmlFor="area-aichi" className="text-sm">
                愛知県
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="area-gifu" className="mr-2" />
              <label htmlFor="area-gifu" className="text-sm">
                岐阜県
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="area-mie" className="mr-2" />
              <label htmlFor="area-mie" className="text-sm">
                三重県
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="area-shizuoka" className="mr-2" />
              <label htmlFor="area-shizuoka" className="text-sm">
                静岡県
              </label>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">職種</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="job-engineer" className="mr-2" />
              <label htmlFor="job-engineer" className="text-sm">
                エンジニア
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="job-marketing" className="mr-2" />
              <label htmlFor="job-marketing" className="text-sm">
                マーケティング
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="job-sales" className="mr-2" />
              <label htmlFor="job-sales" className="text-sm">
                営業
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="job-design" className="mr-2" />
              <label htmlFor="job-design" className="text-sm">
                デザイン
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="job-planning" className="mr-2" />
              <label htmlFor="job-planning" className="text-sm">
                企画
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="job-research" className="mr-2" />
              <label htmlFor="job-research" className="text-sm">
                研究開発
              </label>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">給与</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="salary-900" className="mr-2" />
              <label htmlFor="salary-900" className="text-sm">
                時給900円〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="salary-1000" className="mr-2" />
              <label htmlFor="salary-1000" className="text-sm">
                時給1,000円〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="salary-1200" className="mr-2" />
              <label htmlFor="salary-1200" className="text-sm">
                時給1,200円〜
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="salary-1500" className="mr-2" />
              <label htmlFor="salary-1500" className="text-sm">
                時給1,500円〜
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4 space-y-2">
          <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">条件を適用</Button>
          <Button variant="outline" className="w-full">
            条件をリセット
          </Button>
        </div>
      </div>
    </div>
  )
}
