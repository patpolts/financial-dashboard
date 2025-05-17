import { DefaultTheme } from 'styled-components';
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
};

export const lightTheme: DefaultTheme = {
  breakpoints,
  colors: {
    background: '#fff',
    text: '#111',
    primary: '#efb956',
    secondary: '#3c3933',
    buttonText: '#fff',
    surface: '#f9fafb',
    border: '#e2e8f0',
    header: {
      background: '#f8fafc',
      text: '#422c03'
    },
    footer: {
      background: '#f1f5f9',
      text: '#422c03'
    },
    sidebar: {
      background: '#f1f5f9',
      text: '#1e293b'
    },
    card: {
      background: '#fffcf7',
      title: '#422c03',
      text: '#8f5d02'
    }
  },
};

export const darkTheme: DefaultTheme = {
  breakpoints,
  colors: {
    background: '#0f172a',
    text: '#f8fafc',
    primary: '#483002',
    secondary: '#d7bf90',
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
