import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const InsertDriveFileIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#68707A', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path
          d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z'
          fill={fill}
        />
      </svg>
    )
  },
)

InsertDriveFileIcon.displayName = 'InsertDriveFileIcon'
