import React from 'react'
import clsx from 'clsx'

type SectionTagProps = {
  children: React.ReactNode
  color?: boolean
}

export const SectionTag: React.FC<SectionTagProps> = ({ children, color }) => {
  return (
    <div className={clsx(color != null ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-500', 'px-4 py-px font-bold uppercase w-fit rounded-full text-sm')}>
      {children}
    </div>
  )
}
