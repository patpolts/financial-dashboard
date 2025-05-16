import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import  AuthProviders  from '@components/AuthProvider';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies(); 
  const theme = cookieStore.get('theme')?.value ?? 'light';

  return (
    <html lang="pt-BR" data-theme={theme}>
      <body>
          <AuthProviders serverTheme={theme}>
            {children}
          </AuthProviders>
      </body>
    </html>
  );
}
