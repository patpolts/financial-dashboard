import { NextRequest, NextResponse } from 'next/server';
import NextAuth from 'next-auth';
import { authOptions } from '@libs/auth/auth-options';

// const handler = NextAuth(authOptions);

import { cookies } from 'next/headers';

const MAX_ATTEMPTS = 3;
const WINDOW_MS = 10 * 60 * 1000; // 10 min
const ATTEMPT_COOKIE = 'login_attempts';

interface AttemptData {
  count: number;
  firstAttempt: number;
}
// export async function POST() {
//   return NextResponse.json({ ok: true, message: 'login-limit route reached' });
// }
export async function POST(request: NextRequest) {
  const now = Date.now();
  const cookieStore = await cookies();
  const cookie = cookieStore.get(ATTEMPT_COOKIE)?.value;
  let attempts: AttemptData = { count: 0, firstAttempt: Date.now() };

  if (cookie) {
    try {
      const parsed = JSON.parse(cookie);
      if (now - parsed.firstAttempt <= WINDOW_MS) {
        attempts = parsed;
      }
    } catch {
      attempts = { count: 0, firstAttempt: now };
    }
  }


  if (now - attempts.firstAttempt > WINDOW_MS) {
    attempts = { count: 0, firstAttempt: now };
  }

  if (attempts.count >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { error: 'Limite de tentativas excedido. Tente novamente mais tarde.' },
      { status: 429 }
    );
  }

  attempts.count++;

  const response = NextResponse.json({ ok: true, attempts: attempts.count });

  cookieStore.set({
    name: ATTEMPT_COOKIE,
    value: JSON.stringify(attempts),
    maxAge: WINDOW_MS / 1000, 
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
  });

  return response;
}
