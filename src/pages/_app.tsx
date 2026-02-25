import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { MainLayout } from '@/components/layout/MainLayout';
import { appTheme } from '@/theme/theme';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Head>
        <title>ClarityMath</title>
        <meta content="Initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
