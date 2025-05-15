'use client';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import localFont from 'next/font/local';
import { CssBaseline } from '@mui/material';
import { Montserrat } from 'next/font/google';
import { Caveat } from 'next/font/google';
//add font
const gillSansFont = localFont({
  src: [
    {
      path: '../src/fonts/Gill-Sans-MT-Italic.ttf',
    },
  ],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      paper: '#5A6D57',
      default: '#ffff',
    },

    text: {
      primary: '#0C0C0C',
      secondary: '#fff',
    },
    grey: {
      500: '#D1D9CF',
      800: '#404040',
    },
    success: {
      main: '#5A6D57',
      light: '#748C70',
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h4: {
      fontFamily: caveat.style.fontFamily,
      lineHeight: 1.75,
      fontSize: '2.4rem',
    },
    h5: {
      fontFamily: caveat.style.fontFamily,
      lineHeight: 1.75,
      fontSize: '1.6rem',
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: false,
        disableFocusRipple: true,
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
