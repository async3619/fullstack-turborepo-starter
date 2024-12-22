import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'

import { defaultTheme } from '@/styles/theme'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <meta
          name="theme-color"
          content={defaultTheme.palette.primary.main}
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <AppCacheProvider {...props}>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppCacheProvider>
    </>
  )
}
