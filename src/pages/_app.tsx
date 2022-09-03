import '../style/base.css'
import React, { Fragment } from 'react'
import { AppPropsWithLayout } from 'next/app'
import { Router } from 'next/router'

import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 2,
  color: '#21A4C4',
  className: 'bar-of-progress',
  delay: 100
})

if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const Layout = Component.Layout ?? Fragment
  const layoutProps = Component.layoutProps ?? {}

  return (
    <Layout {...layoutProps}>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
