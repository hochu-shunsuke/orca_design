-- テスト用：RLSを一時的に無効化してSupabase接続を確認
-- 本番では絶対に使わないでください

-- 既存のポリシーを削除
DROP POLICY IF EXISTS "Users can view logs" ON auth_logs;
DROP POLICY IF EXISTS "Authenticated users can insert logs" ON auth_logs;

-- RLSを無効化（テスト用のみ）
ALTER TABLE auth_logs DISABLE ROW LEVEL SECURITY;

-- テーブルが存在することを確認
SELECT * FROM auth_logs LIMIT 5;
