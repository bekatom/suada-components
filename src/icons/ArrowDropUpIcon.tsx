import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const ArrowDropUpIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#fff', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='20'
        height='20'
        viewBox='0 -960 960 960'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path d='M288-384 480-576 672-384H288Z' fill={fill} />
      </svg>
    )
  },
)

ArrowDropUpIcon.displayName = 'ArrowDropUpIcon'
