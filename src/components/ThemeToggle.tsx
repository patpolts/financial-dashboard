'use client';

import { useThemeContext } from '@context/ThemeContext';
import styled from 'styled-components';
import { ThemeSwitch } from './ui/ThemeSwitch';
import {FiSun, FiMoon} from 'react-icons/fi';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <ToggleContainer>
      {isDark ? <FiMoon size={20} color="white" title='Mudar para tema escuro' /> : <FiSun size={20} color="black" title='Mudar para tema escuro' />}
      <ThemeSwitch checked={isDark} onCheckedChange={toggleTheme} />
    </ToggleContainer>
  );
}
