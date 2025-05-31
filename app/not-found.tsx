import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-gray-300">404</h1>
        <h2 className="text-2xl font-semibold">ページが見つかりません</h2>
        <p className="text-gray-600 max-w-md">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/">ホームに戻る</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/jobs">求人を探す</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}