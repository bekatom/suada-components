import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const AddStudent = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path
          d='M10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5ZM10 1.25C5.1875 1.25 1.25 5.1875 1.25 10C1.25 14.8125 5.1875 18.75 10 18.75C14.8125 18.75 18.75 14.8125 18.75 10C18.75 5.1875 14.8125 1.25 10 1.25Z'
          fill='#68707A'
        />
        <path
          d='M15 9.375H10.625V5H9.375V9.375H5V10.625H9.375V15H10.625V10.625H15V9.375Z'
          fill='#68707A'
        />
      </svg>
    )
  },
)

AddStudent.displayName = 'AddStudent'
