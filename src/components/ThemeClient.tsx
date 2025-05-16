'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { lightTheme, darkTheme } from '@styles/themes';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Header from './Header';
import Footer from './Footer';
import { ThemeContext } from '@context/ThemeContext';

export function ThemeClient({ children, serverTheme }: { children: React.ReactNode; serverTheme: string }) {
  const [isDark, setIsDark] = useState(serverTheme === 'dark');

  useEffect(() => {
    document.cookie = `theme=${isDark ? 'dark' : 'light'}; path=/`;
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const themeObject = isDark ? darkTheme : lightTheme;
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated' && !!session?.user;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={themeObject}>
        <GlobalStyle />
        {isAuthenticated && <Header isDark={isDark} toggleTheme={toggleTheme} />}
        <main>{children}</main>
        {isAuthenticated && <Footer />}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
