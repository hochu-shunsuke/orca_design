import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceCta() {
  return (
    <div className="bg-brand-orange text-white py-8 px-4 text-center rounded-md">
      <h3 className="text-xl font-bold mb-4">東海地方の新卒採用はオルキャリにお任せください</h3>
      <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
        <Link href="/contact">お問い合わせページへ</Link>
      </Button>
    </div>
  )
}
