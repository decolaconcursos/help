import React from 'react'

type Props = {
  children: React.ReactNode
}

export const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">{children}</main>
    </>
  )
}
