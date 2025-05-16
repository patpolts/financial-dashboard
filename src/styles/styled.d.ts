import 'styled-components';

interface sidebarOptions{
  background: string;
  text: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      buttonText: string;
      surface: string;
      sidebar: sidebarOptions;
    };
  }
}
