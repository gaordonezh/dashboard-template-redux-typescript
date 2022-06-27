import { ReactNode } from 'react';

export interface ThemeProps {
  customShadows: {
    z20: string;
    z8: string;
    z16: string;
    primary: string;
    secondary: string;
  };
  palette: {
    grey: any;
    action: {
      hover: string;
      focus: string;
      disabledBackground: boolean;
    };
    text: { disabled: boolean };
  };
  shape: {
    borderRadiusMd: string;
    borderRadius: number;
  };
  spacing: Function;
  shadows: Array<number>;
}

export interface ContentProps {
  title?: string;
  helper?: string;
  component?: ReactNode;
  children: ReactNode;
}

export interface LogoProps {
  disabledLink: boolean;
  sx?: object;
}

export interface MenuPopoverProps {
  children: ReactNode;
  sx: object;
  open: boolean;
  anchorEl: any;
  onClose: VoidFunction;
}

export interface PageProps {
  title: string;
  children: ReactNode;
}

export interface ScrollbarProps {
  children: ReactNode;
  sx: object;
}

export interface DashboardNavbarProps {
  onOpenSidebar: VoidFunction;
}

export interface NavItemProps {
  item: {
    title: string;
    path: string;
    icon: string;
    info: string;
    children: Array<any>;
  };
  active: Function;
}

export interface NavSectionProps {
  navConfig: Array<any>;
}

export interface DashboardSidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ResponsiveFontSizesProps {
  sm: number;
  md: number;
  lg: number;
}
