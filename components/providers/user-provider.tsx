'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  sub?: string;
  name?: string;
  email?: string;
  picture?: string;
  nickname?: string;
  given_name?: string;
  family_name?: string;
  [key: string]: any;
}

interface UserContextType {
  user: User | null;
  error?: string | null; // 文字列に変更
  isLoading: boolean;
  loading: boolean; // エイリアス
  checkSession: () => Promise<void>;
  refreshUser: () => Promise<void>; // エイリアス
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkSession = async () => {
    try {
      setIsLoading(true);
      setError(null); // エラーをリセット
      const response = await fetch('/api/auth/me');
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else if (response.status === 401) {
        // ユーザーがログインしていない場合
        setUser(null);
      } else {
        throw new Error(`Failed to fetch user: ${response.statusText}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const value: UserContextType = {
    user,
    error,
    isLoading,
    loading: isLoading, // エイリアス
    checkSession,
    refreshUser: checkSession, // エイリアス
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
