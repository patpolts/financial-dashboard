import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@lib/auth/auth-options';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const session = await getServerSession(authOptions);

  
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
