import 'styled-components';

interface SidebarOptions {
  background: string;
  text: string;
}

interface HeaderFooterOptions {
  background: string;
  text: string;
}

interface SidebarOptions{
  background: string;
  text: string;
}

interface CardOptions{
  background: string;
  title: string;
  text: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      buttonText: string;
      surface: string;
      border: string;
      header: HeaderFooterOptions;
      footer: HeaderFooterOptions;
      sidebar: SidebarOptions;
      card: CardOptions;
    };
  }
}
