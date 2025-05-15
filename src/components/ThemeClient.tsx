'use client';

import { ThemeProvider } from 'styled-components';
import { ReactNode, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '@styles/themes';
import { GlobalStyle } from '@styles/global';
import Header from './Header';
import Footer from './Footer';

interface ThemeClientProps {
  children: ReactNode;
}

export function ThemeClient({ children }: ThemeClientProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    setIsDark(stored === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
