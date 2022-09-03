// Create By: Lenderson on 9/3/2022

import React from 'react'

type SVGProps = React.SVGProps<SVGSVGElement>
type Props = SVGProps & {
  children?: React.ReactNode
}

export const Logo: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={'w-6 h-6'}
        {...props}
      >
        <path
          opacity={0.6}
          d="M13.313 8.145 1.545 11.26c-1.543.409-2.066 2.337-.942 3.472l8.578 8.653c1.125 1.135 3.054.624 3.473-.919l3.19-11.768c.418-1.544-.987-2.962-2.53-2.553Z"
          fill="#2083A7"
        />
        <path
          opacity={0.6}
          d="M21.395.071 4.445 4.558c-1.543.41-2.066 2.337-.941 3.472l12.353 12.464c1.125 1.135 3.054.623 3.473-.92l4.595-16.95c.418-1.543-.988-2.962-2.53-2.553Z"
          fill="#2083A7"
        />
      </svg>
    </div>

  )
}
