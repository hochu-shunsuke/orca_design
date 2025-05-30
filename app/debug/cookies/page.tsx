'use client';

import { useEffect, useState } from 'react';

export default function CookiesDebugPage() {
  const [cookies, setCookies] = useState<string>('');
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    // クッキーの内容を取得
    setCookies(document.cookie);
    
    // ページリロード回数をカウント
    const count = parseInt(localStorage.getItem('reloadCount') || '0', 10) + 1;
    setReloadCount(count);
    localStorage.setItem('reloadCount', count.toString());
  }, []);

  const handleClearCookies = () => {
    // すべてのクッキーをクリア
    document.cookie.split(";").forEach(function(c) { 
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    setCookies('');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const txnCookies = cookies.split(';').filter(cookie => cookie.includes('__txn_'));
  
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">🍪 Cookie Debug Page</h1>
      
      <div className="grid gap-6">
        {/* Statistics */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📊 Statistics</h2>
          <p><strong>Page Reload Count:</strong> {reloadCount}</p>
          <p><strong>Total Cookies:</strong> {cookies ? cookies.split(';').length : 0}</p>
          <p><strong>Transaction Cookies (__txn_):</strong> {txnCookies.length}</p>
        </div>

        {/* Transaction Cookies Alert */}
        {txnCookies.length > 0 && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Transaction Cookies Found</h3>
            <p className="text-red-700 mb-2">
              Found {txnCookies.length} transaction cookie(s). These should not persist in an unauthenticated state.
            </p>
            <div className="bg-white p-2 rounded border text-sm font-mono">
              {txnCookies.map((cookie, index) => (
                <div key={index} className="text-red-600">{cookie.trim()}</div>
              ))}
            </div>
          </div>
        )}

        {/* All Cookies */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🍪 All Cookies</h2>
          {cookies ? (
            <div className="bg-white p-3 rounded border text-sm font-mono whitespace-pre-wrap break-all">
              {cookies.split(';').map((cookie, index) => (
                <div key={index} className="py-1 border-b border-gray-100 last:border-b-0">
                  {cookie.trim() || '(empty)'}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No cookies found</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button 
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            🔄 Refresh Page
          </button>
          <button 
            onClick={handleClearCookies}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            🗑️ Clear All Cookies
          </button>
        </div>

        {/* Test Instructions */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">🧪 Test Instructions</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Clear all cookies using the button above</li>
            <li>Refresh the page multiple times and check if __txn_ cookies appear</li>
            <li>Navigate to different pages and return to check cookie growth</li>
            <li>If no transaction cookies appear, the fix is working!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
