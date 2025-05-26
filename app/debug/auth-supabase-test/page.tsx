'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AuthSupabaseTestPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Auth0 + Supabase 連携テスト</h1>
      
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">🔗 連携テスト手順</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>このページにアクセス（Auth0認証が必要）</li>
            <li>下のボタンでセッションをSupabaseに記録</li>
            <li>Supabaseでログを確認</li>
          </ol>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">📝 セッションログ記録</h3>
          <p className="text-sm text-gray-600 mb-4">
            現在のAuth0セッション情報をSupabaseのauth_logsテーブルに記録します
          </p>
          
          <Button 
            onClick={async () => {
              try {
                const response = await fetch('/api/auth/log-session', {
                  method: 'POST'
                });
                const result = await response.json();
                
                if (result.success) {
                  alert(`✅ 成功！\nユーザー: ${result.user}\nログID: ${result.logId}`);
                } else {
                  alert(`❌ エラー: ${result.error}`);
                }
              } catch (error) {
                alert(`❌ エラー: ${error instanceof Error ? error.message : String(error)}`);
              }
            }}
            className="bg-green-600 hover:bg-green-700"
          >
            セッションをSupabaseに記録
          </Button>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">🔍 確認方法</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Supabase Dashboard → Table Editor → auth_logs</li>
            <li>新しいレコードが追加されているか確認</li>
            <li>auth0_user_id, username, emailが正しく記録されているか確認</li>
          </ul>
        </div>

        <div className="pt-6">
          <Link href="/">
            <Button variant="outline">ホームに戻る</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
