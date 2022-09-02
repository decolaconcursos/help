import '../style/global.css'
import React from 'react'
import { AppProps } from 'next/app'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={'bg-sky-400'}>
      <Component {...pageProps} />
    </div>
  )
}
