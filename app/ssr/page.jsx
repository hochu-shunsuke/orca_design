'use client';

import React from 'react';
import { withPageAuthRequired } from '@/components/auth/with-page-auth-required';
import { useUser } from '@auth0/nextjs-auth0';

function SSRPageComponent() {
  const { user, error, isLoading } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">SSR 認証済みページ</h1>
      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">ユーザー情報（サーバーサイド取得）</h2>
        <div className="space-y-2">
          <p><strong>名前:</strong> {user?.name}</p>
          <p><strong>メール:</strong> {user?.email}</p>
          <p><strong>プロフィール画像:</strong></p>
          {user?.picture && (
            <img 
              src={user.picture} 
              alt="Profile" 
              className="w-16 h-16 rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default withPageAuthRequired(SSRPageComponent);