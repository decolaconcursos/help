import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = { }

type Props = {
  children: React.ReactNode
}

export const QuestionsLayout: React.FC<Props> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}
