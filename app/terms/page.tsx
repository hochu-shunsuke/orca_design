import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "利用規約 | オルキャリ",
  description: "オルキャリの利用規約をご確認ください。",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-brand-orange">
          ホーム
        </Link>
        <span>/</span>
        <span>利用規約</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">利用規約</h1>

      <Card>
        <CardContent className="p-6">
          <div className="prose max-w-none">
            <p className="text-sm text-muted-foreground mb-4">最終更新日: 2025年4月1日</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第1条（適用）</h2>
              <p className="mb-4">
                1.
                本規約は、株式会社オルキャリ（以下「当社」といいます）が提供するサービス「オルキャリ」（以下「本サービス」といいます）の利用に関する条件を定めるものです。
              </p>
              <p className="mb-4">
                2.
                本サービスを利用するすべての利用者（以下「ユーザー」といいます）は、本規約に同意したものとみなします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第2条（ユーザー登録）</h2>
              <p className="mb-4">
                1. 本サービスの利用を希望する者は、当社の定める方法によりユーザー登録を行うものとします。
              </p>
              <p className="mb-4">
                2. 当社は、当社の基準によりユーザー登録の可否を判断し、登録を認める場合にはその旨を通知します。
              </p>
              <p className="mb-4">
                3. ユーザー登録の完了時に、ユーザーと当社との間に本サービスの利用契約が成立するものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第3条（アカウント情報の管理）</h2>
              <p className="mb-4">
                1.
                ユーザーは、自己の責任においてアカウント情報を管理するものとし、第三者に利用させたり、貸与、譲渡、名義変更、売買等をしてはならないものとします。
              </p>
              <p className="mb-4">
                2.
                アカウント情報の管理不十分、使用上の過誤、第三者の使用等による損害の責任はユーザーが負うものとし、当社は一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第4条（禁止事項）</h2>
              <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはならないものとします。</p>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第5条（本サービスの提供の停止等）</h2>
              <p className="mb-4">
                1.
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ol>
              <p className="mb-4">
                2.
                当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第6条（著作権）</h2>
              <p className="mb-4">
                1.
                ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報のみ、本サービスを利用して投稿することができるものとします。
              </p>
              <p className="mb-4">
                2.
                ユーザーが本サービスを利用して投稿した文章、画像、映像等の著作権については、当該ユーザーその他既存の権利者に留保されるものとします。ただし、当社は、本サービスを利用して投稿された文章、画像、映像等を利用できるものとし、ユーザーは、この利用に関して、著作者人格権を行使しないものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第7条（退会）</h2>
              <p className="mb-4">ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第8条（保証の否認および免責事項）</h2>
              <p className="mb-4">
                1.
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </p>
              <p className="mb-4">
                2.
                当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第9条（サービス内容の変更等）</h2>
              <p className="mb-4">
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第10条（利用規約の変更）</h2>
              <p className="mb-4">
                1.
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              </p>
              <p className="mb-4">
                2.
                当社が別途定める場合を除いて、変更後の利用規約は、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第11条（通知または連絡）</h2>
              <p className="mb-4">ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第12条（権利義務の譲渡の禁止）</h2>
              <p className="mb-4">
                ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">第13条（準拠法・裁判管轄）</h2>
              <p className="mb-4">1. 本規約の解釈にあたっては、日本法を準拠法とします。</p>
              <p className="mb-4">
                2. 本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <div className="text-right">
              <p className="font-bold">株式会社オルキャリ</p>
              <p>〒460-0008 愛知県名古屋市中区栄3-1-1</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
