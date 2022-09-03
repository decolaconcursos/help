// Create By: Lenderson on 9/3/2022

import React from 'react'

type SVGProps = React.SVGProps<SVGSVGElement>
type Props = SVGProps & {
  children?: React.ReactNode
}

export const Youtube: React.FC<Props> = ({ children, ...props }) => {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
         className={'w-6 h-6'}
         {...props}>
      <path d="M35.7477 8.96054C35.3337 7.40159 34.1138 6.1738 32.565 5.75713C29.7575 5 18.5 5 18.5 5C18.5 5 7.24254 5 4.43503 5.75713C2.88616 6.17387 1.66629 7.40159 1.25225 8.96054C0.5 11.7862 0.5 17.6818 0.5 17.6818C0.5 17.6818 0.5 23.5774 1.25225 26.4031C1.66629 27.962 2.88616 29.1387 4.43503 29.5553C7.24254 30.3125 18.5 30.3125 18.5 30.3125C18.5 30.3125 29.7575 30.3125 32.565 29.5553C34.1138 29.1387 35.3337 27.962 35.7477 26.4031C36.5 23.5774 36.5 17.6818 36.5 17.6818C36.5 17.6818 36.5 11.7862 35.7477 8.96054ZM14.8182 23.0345V12.3291L24.2272 17.6819L14.8182 23.0345Z" fill="#95A3B1"/>
    </svg>
  )
}
