import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const EditRounded = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path d='M28.75 26.25H11.25V27.5H28.75V26.25Z' fill='#68707A' />
        <path
          d='M25.875 15.625C26.375 15.125 26.375 14.375 25.875 13.875L23.625 11.625C23.125 11.125 22.375 11.125 21.875 11.625L12.5 21V25H16.5L25.875 15.625ZM22.75 12.5L25 14.75L23.125 16.625L20.875 14.375L22.75 12.5ZM13.75 23.75V21.5L20 15.25L22.25 17.5L16 23.75H13.75Z'
          fill='#68707A'
        />
      </svg>
    )
  },
)

EditRounded.displayName = 'EditRounded'
