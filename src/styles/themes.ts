import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#f5f5f5',
    text: '#1a1a1a',
    primary: '#4f46e5',
    secondary: '#818cf8',
    buttonText: '',
    surface: '',
    sidebar: {
      background: '#ededed',
      text: ''
    }
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#1a1a1a',
    text: '#f5f5f5',
    primary: '#818cf8',
    secondary: '#4f46e5',
    buttonText: '',
    surface: '',
    sidebar: {
      background: '#000',
      text: ''
    }
  },
};
