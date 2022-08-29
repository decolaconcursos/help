import React from 'react'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

const components = { }

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
