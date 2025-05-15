'use client';

import { useThemeContext } from '@context/ThemeContext';
import { ThemeSwitch } from './ui/ThemeSwitch';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <ThemeSwitch
      checked={isDark}
      onCheckedChange={toggleTheme}
    />
  );
}
