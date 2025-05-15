'use client';

import React from 'react';
import styled from 'styled-components';
import { ThemeSwitch } from './ui/ThemeSwitch';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>Dashboard Financeiro</h1>
      <ThemeSwitch checked={isDark} onCheckedChange={toggleTheme} />
    </HeaderContainer>
  );
}
