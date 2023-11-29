import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
  },
  typography: {
    button: {
      textTransform: 'none',
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        // need focus ring...
        // disableFocusRipple: true,
        // disableRipple: true,
      },
    },
  },
};

export const theme = createTheme(themeOptions);
