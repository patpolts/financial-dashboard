'use client';

import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function AppLayout({ children, currentTheme, onToggleTheme }: Props) {
  return (
    <>
      <Header currentTheme={currentTheme} onToggleTheme={onToggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
