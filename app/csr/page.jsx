'use client';

import React from 'react';

export default function CSRPage() {
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">クライアントサイド描画ページ</h1>

        <div data-testid="csr-text" className="space-y-4 text-base leading-relaxed">
          <p>
            このページは <code>withPageAuthRequired</code> を使って保護できます。
            ログインしているユーザーだけがアクセス可能で、ログアウトしている場合はログインページへリダイレクトされます。
          </p>

          <p>
            保護されたクライアントサイドのページでは、<code>useUser</code> フックを使ってユーザープロフィールにアクセスできます。
            このフックは <code>UserProvider</code>（コンテキストプロバイダー）に依存しているため、
            カスタム <a href="https://nextjs.org/docs/advanced-features/custom-app" target="_blank" rel="noopener noreferrer">App コンポーネント</a> を
            <code>UserProvider</code> でラップする必要があります。
          </p>

          <p>
            また、<code>/auth/profile</code> API ルートを呼び出してユーザープロフィールを取得することも可能です。
          </p>
        </div>
      </div>
    </>
  );
}
