import React from 'react'

type Props = {
  children: React.ReactNode
}
export const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className={'text-2xl bg-sky-500'}>
        Basic Layout
      </div>
      {children}
    </div>
  )
}
