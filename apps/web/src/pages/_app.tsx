import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'

import { useApollo } from '@/lib/apollo'

import { defaultTheme } from '@/styles/theme'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const apolloClient = useApollo(pageProps)

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
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </AppCacheProvider>
    </>
  )
}
