// src/components/ThemeToggle.tsx
'use client'

import { useTheme } from '@context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      Tema: {theme === 'light' ? '🌞' : '🌙'}
    </button>
  )
}
