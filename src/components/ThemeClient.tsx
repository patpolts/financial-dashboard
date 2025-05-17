'use client';

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { lightTheme, darkTheme } from '@styles/themes';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Header from './Header';
import Footer from './Footer';
import { ThemeContext } from '@context/ThemeContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

export function ThemeClient({ children, serverTheme }: { children: React.ReactNode; serverTheme: string }) {
  const [isDark, setIsDark] = useState(serverTheme === 'dark');
  const [isHydrated, setIsHydrated] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    document.cookie = `theme=${isDark ? 'dark' : 'light'}; path=/`;
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  if (!isHydrated) return null;

  const themeObject = isDark ? darkTheme : lightTheme;
  const isAuthenticated = status === 'authenticated' && !!session?.user;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={themeObject}>
        <GlobalStyle />
        {isAuthenticated && <Header isDark={isDark} toggleTheme={toggleTheme} />}
        <AppContainer>
          <MainContent>{children}</MainContent>
          {isAuthenticated && <Footer />}
        </AppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
