import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ThemeClient } from '@components/ThemeClient';

export const metadata: Metadata = {
  title: 'Dashboard Financeiro',
  description: 'Controle e análise das suas finanças',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeClient>
          {children}
        </ThemeClient>
      </body>
    </html>
  );
}
