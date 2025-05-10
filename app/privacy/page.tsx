import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "プライバシーポリシー | オルキャリ",
  description: "オルキャリのプライバシーポリシーをご確認ください。",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-brand-orange">
          ホーム
        </Link>
        <span>/</span>
        <span>プライバシーポリシー</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <Card>
        <CardContent className="p-6">
          <div className="prose max-w-none">
            <p className="text-sm text-muted-foreground mb-4">最終更新日: 2025年4月1日</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">1. はじめに</h2>
              <p className="mb-4">
                株式会社オルキャリ（以下「当社」といいます）は、オルキャリサービス（以下「本サービス」といいます）を提供するにあたり、ユーザーの個人情報を取り扱います。当社は、個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守するとともに、本プライバシーポリシーを定め、これを遵守します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">2. 収集する個人情報</h2>
              <p className="mb-4">当社は、本サービスの提供にあたり、以下の個人情報を収集することがあります。</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>住所</li>
                <li>生年月日</li>
                <li>学歴・職歴</li>
                <li>資格・スキル</li>
                <li>その他、本サービスの利用にあたり必要な情報</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">3. 個人情報の利用目的</h2>
              <p className="mb-4">当社は、収集した個人情報を以下の目的で利用します。</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>本サービスの提供・運営</li>
                <li>ユーザーからのお問い合わせへの対応</li>
                <li>本サービスの改善・新機能開発</li>
                <li>本サービスに関するお知らせ・メールマガジンの配信</li>
                <li>イベント・セミナーの案内</li>
                <li>統計データの作成</li>
                <li>その他、本サービスの提供に付随する目的</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">4. 個人情報の第三者提供</h2>
              <p className="mb-4">
                当社は、以下のいずれかに該当する場合を除き、個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体または財産の保護のために必要がある場合であって、ユーザーの同意を得ることが困難であるとき
                </li>
                <li>
                  公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ユーザーの同意を得ることが困難であるとき
                </li>
                <li>
                  国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">5. 個人情報の開示・訂正・削除</h2>
              <p className="mb-4">
                ユーザーは、当社に対して個人情報の開示・訂正・削除・利用停止を請求することができます。請求を行う場合は、本人確認のうえ、合理的な期間内に対応いたします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">6. 個人情報の安全管理</h2>
              <p className="mb-4">
                当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">7. Cookieの使用</h2>
              <p className="mb-4">
                当社は、本サービスにおいてCookieを使用することがあります。Cookieとは、ウェブサイトがユーザーのコンピュータに送信する小さなテキストファイルで、ユーザーのブラウザに保存されます。当社は、以下の目的でCookieを使用します。
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>ユーザーの利便性向上</li>
                <li>ユーザーの行動パターンの分析</li>
                <li>広告の最適化</li>
              </ul>
              <p className="mb-4">
                ユーザーは、ブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、本サービスの一部の機能が利用できなくなる可能性があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">8. アクセス解析ツールの使用</h2>
              <p className="mb-4">
                当社は、本サービスの利用状況を把握するために、Google
                Analyticsなどのアクセス解析ツールを使用しています。これらのツールは、Cookieを使用してユーザーの情報を収集しますが、個人を特定する情報は収集しません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">9. プライバシーポリシーの変更</h2>
              <p className="mb-4">
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、本ウェブサイト上に変更後のプライバシーポリシーを掲載します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">10. お問い合わせ</h2>
              <p className="mb-4">本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。</p>
              <p className="mb-4">
                株式会社オルキャリ 個人情報保護担当
                <br />
                住所：〒460-0008 愛知県名古屋市中区栄3-1-1
                <br />
                メールアドレス：privacy@olcareer.jp
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
