'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeClient } from './ThemeClient';

interface ProvidersProps {
  children: ReactNode;
  serverTheme: string;
}

export default function AuthProviders({ children, serverTheme }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeClient serverTheme={serverTheme}>
        {children}
      </ThemeClient>
    </SessionProvider>
  );
}
