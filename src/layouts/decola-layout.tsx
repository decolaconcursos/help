import React from 'react'

type Props = {
  children: React.ReactNode
}

export const DecolaLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      Decola - Layout
      ---<br/>
      {children}
    </>
  )
}
