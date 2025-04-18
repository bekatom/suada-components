import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const SchoolIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#68707A', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
        fill={fill}
        className={className}
        onClick={onClick}
        {...props}
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z' />
      </svg>
    )
  },
)

SchoolIcon.displayName = 'SchoolIcon'
