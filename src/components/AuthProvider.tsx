'use client';

import { ReactNode, Suspense } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeClient } from './ThemeClient';
import { Spinner } from './ui/Spinner';

interface ProvidersProps {
  children: ReactNode;
  serverTheme: string;
}

export default function AuthProviders({ children, serverTheme }: ProvidersProps) {
  return (
    <Suspense fallback={<Spinner />}>
      <SessionProvider>
        <ThemeClient serverTheme={serverTheme}>
          {children}
        </ThemeClient>
      </SessionProvider>
    </Suspense>
  );
}
