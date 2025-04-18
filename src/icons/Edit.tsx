import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const Edit = forwardRef<SVGSVGElement, SvgProps>(({ className, onClick, ...props }, ref) => {
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
      <path d='M22.5 19.5H1.5V21H22.5V19.5Z' fill='#020210' />
      <path
        d='M19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z'
        fill='#020210'
      />
    </svg>
  )
})

Edit.displayName = 'Edit'
