'use client';

import React from 'react';
import { useUser } from '@/components/providers/user-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function CSRPage() {
  const { user, loading, error, refreshUser } = useUser();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8" data-testid="csr">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">認証状態を確認中...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8" data-testid="csr">
        <Card className="max-w-2xl mx-auto border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">エラーが発生しました</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={refreshUser} variant="outline">
              再試行
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8" data-testid="csr">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8" data-testid="csr-title">
          クライアントサイド認証デモ
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 認証状態表示 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                認証状態
                <Badge variant={user ? "default" : "secondary"}>
                  {user ? "ログイン済み" : "未ログイン"}
                </Badge>
              </CardTitle>
              <CardDescription>
                クライアントサイドでのAuth0認証状態
              </CardDescription>
            </CardHeader>
            <CardContent>
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.picture} alt={user.name} />
                      <AvatarFallback>
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-2">User ID:</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded break-all">
                      {user.sub}
                    </code>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    ログインしていません
                  </p>
                  <a
                    href="auth/login"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    ログイン
                  </a>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 実装情報 */}
          <Card>
            <CardHeader>
              <CardTitle>実装詳細</CardTitle>
              <CardDescription>
                クライアントサイド認証の技術仕様
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">使用技術:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>React Context API</li>
                    <li>Auth0 Next.js SDK</li>
                    <li>TypeScript</li>
                    <li>カスタムHook（useUser）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">機能:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>クライアントサイド認証状態管理</li>
                    <li>リアルタイムユーザー情報更新</li>
                    <li>エラーハンドリング</li>
                    <li>ローディング状態管理</li>
                  </ul>
                </div>
              </div>
              
              {user && (
                <div className="mt-6 pt-4 border-t">
                  <Button 
                    onClick={refreshUser} 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                  >
                    ユーザー情報を更新
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 説明セクション */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>このページについて</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                このページは <strong>クライアントサイドレンダリング（CSR）</strong> で動作し、
                <code className="bg-gray-100 px-2 py-1 rounded">useUser</code> フックを使用してAuth0からユーザー情報を取得しています。
              </p>

              <p>
                <code className="bg-gray-100 px-2 py-1 rounded">UserProvider</code> コンテキストプロバイダーが
                アプリケーション全体にユーザー状態を提供し、任意のコンポーネントから認証状態にアクセスできます。
              </p>

              <p>
                認証が必要なページでは、<code className="bg-gray-100 px-2 py-1 rounded">withPageAuthRequired</code> HOCを使用して
                未認証ユーザーを自動的にログインページにリダイレクトできます。
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">🔧 開発者向け情報</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                  <li>API エンドポイント: <code>/auth/me</code></li>
                  <li>React Context: <code>UserContext</code></li>
                  <li>カスタムHook: <code>useUser()</code></li>
                  <li>プロバイダー: <code>&lt;UserProvider&gt;</code></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
