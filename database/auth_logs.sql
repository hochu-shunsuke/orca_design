-- Auth0ユーザーのログイン記録用テーブル
CREATE TABLE auth_logs (
  id SERIAL PRIMARY KEY,
  auth0_user_id TEXT NOT NULL,
  username TEXT,
  email TEXT,
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 簡単なRLS設定（後で調整可能）
ALTER TABLE auth_logs ENABLE ROW LEVEL SECURITY;

-- 全ユーザーが自分のレコードを見れるポリシー
CREATE POLICY "Users can view own logs" ON auth_logs
  FOR SELECT USING (auth0_user_id = auth.jwt() ->> 'sub');

-- 認証済みユーザーがログを挿入できるポリシー  
CREATE POLICY "Authenticated users can insert logs" ON auth_logs
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
