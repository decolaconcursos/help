import * as Next from 'next'
import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'

declare module 'next' {
  export type NextPageWithLayout<P = {}, IP = P> = Next.NextPage<P, IP> & {
    Layout?: FunctionComponent<any>
    layoutProps?: object
  }
}

declare module 'next/app' {

  export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }
}
