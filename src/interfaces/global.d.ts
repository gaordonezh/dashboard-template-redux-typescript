export interface ThemeProps {
  customShadows: { z20: string; z8: string; z16: string; primary: string; secondary: string };
  palette: {
    grey: any;
    action: { hover: string; focus: string; disabledBackground: boolean };
    text: { disabled: boolean };
  };
  shape: { borderRadiusMd: string; borderRadius: number };
  spacing: Function;
  shadows: Array<number>;
}
