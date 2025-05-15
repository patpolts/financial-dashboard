import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeClient } from '@components/ThemeClient';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value ?? 'light';

  return (
    <html lang="pt-BR" data-theme={theme}>
      <body>
        <SessionProvider>
          <ThemeClient serverTheme={theme}>
            {children}
          </ThemeClient>
        </SessionProvider>
      </body>
    </html>
  );
}
