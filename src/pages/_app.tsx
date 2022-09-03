import '../style/global.css'
import React, { Fragment } from 'react'
import { AppPropsWithLayout } from 'next/app'

export default function MyApp ({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const Layout = Component.Layout ?? Fragment
  const layoutProps = Component.layoutProps ?? {}

  return (
    <Layout {...layoutProps}>
      <Component {...pageProps} />
    </Layout>

  )
}
