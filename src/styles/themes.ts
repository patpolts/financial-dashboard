import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#fff',
    text: '#111',
    primary: '#52a9ff',
    secondary: '#3b82f6',
    buttonText: '#fff',
    surface: '#f9fafb',
    border: '#e2e8f0',
    header: {
      background: '#f8fafc',
      text: '#111'
    },
    footer: {
      background: '#f1f5f9',
      text: '#111'
    },
    sidebar: {
      background: '#f1f5f9',
      text: '#1e293b'
    },
    card: {
      background: '#ededed',
      title: '#111',
      text: '#3b8148'
    }
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#0f172a',
    text: '#f8fafc',
    primary: '#3b82f6',
    secondary: '#60a5fa',
    buttonText: '#fff',
    surface: '#1e293b',
    border: '#334155',
    header: {
      background: '#1e293b',
      text: '#f8fafc'
    },
    footer: {
      background: '#1e293b',
      text: '#f8fafc'
    },
    sidebar: {
      background: '#1e293b',
      text: '#f1f5f9'
    },
    card: {
      background: '#7d7d7d',
      title: '#ededed',
      text: '#d8e9d8'
    }
  },
};
