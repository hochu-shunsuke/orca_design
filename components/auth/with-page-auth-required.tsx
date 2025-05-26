'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/providers/user-provider';

interface WithPageAuthRequiredOptions {
  returnTo?: string;
  loadingComponent?: React.ComponentType;
}

export function withPageAuthRequired<P extends object>(
  Component: React.ComponentType<P>,
  options: WithPageAuthRequiredOptions = {}
) {
  const WrappedComponent = (props: P) => {
    const { user, loading, error } = useUser();
    const router = useRouter();
    const { returnTo, loadingComponent: LoadingComponent } = options;

    useEffect(() => {
      // ローディング中は何もしない
      if (loading) return;

      // エラーがある場合またはユーザーが存在しない場合はログインページにリダイレクト
      if (error || !user) {
        const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
        const redirectPath = returnTo || currentPath;
        const loginUrl = `/auth/login${redirectPath ? `?returnTo=${encodeURIComponent(redirectPath)}` : ''}`;
        
        // クライアントサイドでのリダイレクト
        if (typeof window !== 'undefined') {
          window.location.href = loginUrl;
        }
        return;
      }
    }, [user, loading, error, router, returnTo]);

    // ローディング中の表示
    if (loading) {
      if (LoadingComponent) {
        return <LoadingComponent />;
      }
      
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">認証状態を確認中...</p>
          </div>
        </div>
      );
    }

    // エラーまたは未認証の場合は何も表示しない（リダイレクト処理中）
    if (error || !user) {
      return null;
    }

    // 認証済みの場合は元のコンポーネントを表示
    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withPageAuthRequired(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

// デフォルトのローディングコンポーネント
export const DefaultLoadingComponent: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">認証中...</h2>
      <p className="text-gray-500">しばらくお待ちください</p>
    </div>
  </div>
);
