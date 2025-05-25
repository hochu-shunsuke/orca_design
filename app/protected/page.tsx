'use client';

import React from 'react';
import { withPageAuthRequired } from '@/components/auth/with-page-auth-required';
import { useUser } from '@/components/providers/user-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Lock, User, Mail } from 'lucide-react';

function ProtectedPageComponent() {
  const { user, refreshUser } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              保護されたページ
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            このページは <code className="bg-gray-100 px-2 py-1 rounded">withPageAuthRequired</code> HOC で保護されており、
            認証済みユーザーのみアクセス可能です。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ユーザー情報カード */}
          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-green-600" />
                認証済みユーザー情報
                <Badge variant="default" className="bg-green-600">
                  <Lock className="h-3 w-3 mr-1" />
                  保護済み
                </Badge>
              </CardTitle>
              <CardDescription>
                Auth0から取得したユーザー情報
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {user && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.picture} alt={user.name} />
                      <AvatarFallback className="text-lg">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{user.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div>
                      <label className="text-sm font-medium text-gray-500">User ID</label>
                      <p className="text-sm font-mono bg-gray-50 p-2 rounded break-all">
                        {user.sub}
                      </p>
                    </div>

                    {user.email_verified !== undefined && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">メール認証</label>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={user.email_verified ? "default" : "secondary"}>
                            {user.email_verified ? "認証済み" : "未認証"}
                          </Badge>
                        </div>
                      </div>
                    )}

                    {user.updated_at && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">最終更新</label>
                        <p className="text-sm text-gray-600">
                          {new Date(user.updated_at).toLocaleString('ja-JP')}
                        </p>
                      </div>
                    )}
                  </div>

                  <Button 
                    onClick={refreshUser} 
                    variant="outline" 
                    className="w-full mt-4"
                  >
                    ユーザー情報を更新
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 保護機能の説明 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                保護機能について
              </CardTitle>
              <CardDescription>
                withPageAuthRequired HOC の実装詳細
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-900">🛡️ セキュリティ機能</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 未認証ユーザーの自動リダイレクト</li>
                    <li>• ログイン後の元ページ復帰</li>
                    <li>• クライアントサイド保護</li>
                    <li>• エラーハンドリング</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-blue-900">🔧 技術実装</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• React Higher-Order Component</li>
                    <li>• useUser カスタムフック</li>
                    <li>• Next.js Router 統合</li>
                    <li>• TypeScript 型安全性</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-blue-900">📱 ユーザー体験</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• スムーズなローディング表示</li>
                    <li>• カスタマイズ可能なUI</li>
                    <li>• レスポンシブデザイン</li>
                    <li>• アクセシブルな操作</li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2 text-green-700">✅ 現在の状態</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">認証済み</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">ページアクセス許可</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">ユーザーデータ取得完了</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 使用方法の説明 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>使用方法</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">基本的な使用方法:</h4>
                <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono">
                  <div className="text-gray-700">
                    <span className="text-blue-600">import</span> {`{ withPageAuthRequired }`} <span className="text-blue-600">from</span> <span className="text-green-600">'@/components/auth/with-page-auth-required'</span><br/><br/>
                    <span className="text-blue-600">function</span> <span className="text-yellow-600">MyProtectedPage</span>() {`{`}<br/>
                    &nbsp;&nbsp;<span className="text-blue-600">return</span> &lt;<span className="text-red-600">div</span>&gt;保護されたコンテンツ&lt;/<span className="text-red-600">div</span>&gt;<br/>
                    {`}`}<br/><br/>
                    <span className="text-blue-600">export default</span> <span className="text-yellow-600">withPageAuthRequired</span>(<span className="text-yellow-600">MyProtectedPage</span>)
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">オプション設定:</h4>
                <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono">
                  <div className="text-gray-700">
                    <span className="text-blue-600">export default</span> <span className="text-yellow-600">withPageAuthRequired</span>(<span className="text-yellow-600">MyPage</span>, {`{`}<br/>
                    &nbsp;&nbsp;<span className="text-red-600">returnTo</span>: <span className="text-green-600">'/custom-redirect'</span>,<br/>
                    &nbsp;&nbsp;<span className="text-red-600">loadingComponent</span>: <span className="text-yellow-600">CustomLoadingComponent</span><br/>
                    {`}`})
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default withPageAuthRequired(ProtectedPageComponent);
