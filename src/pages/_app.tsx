import React from 'react'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

const Bold: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (<div style={{ fontWeight: 300 }}>
    {children}
  </div>)
}

const components = {

  Bold

}

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
