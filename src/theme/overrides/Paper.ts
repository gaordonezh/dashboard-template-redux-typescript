import { ThemeProps } from 'interfaces/global';

export default function paper(theme: ThemeProps) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  };
}
