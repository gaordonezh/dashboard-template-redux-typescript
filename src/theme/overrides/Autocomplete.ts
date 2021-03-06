import { ThemeProps } from 'interfaces/global';

export default function autocomplete(theme: ThemeProps) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
