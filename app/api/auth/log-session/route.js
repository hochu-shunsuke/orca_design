import { NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import { supabase } from '@/lib/supabase';

export const POST = async function logUserSession() {
  try {
    // Auth0セッション取得
    const session = await auth0.getSession();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Auth0ユーザー情報からログデータ作成
    const logData = {
      auth0_user_id: session.user.sub,
      username: session.user.name || session.user.nickname,
      email: session.user.email
    };

    // Supabaseにログ挿入
    const { data, error } = await supabase
      .from('auth_logs')
      .insert([logData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to log session', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Auth0 session logged to Supabase successfully',
      user: session.user.name || session.user.email,
      logId: data[0]?.id
    });

  } catch (error) {
    console.error('Auth log error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
};
