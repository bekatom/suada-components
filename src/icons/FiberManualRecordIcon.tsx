import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const FiberManualRecordIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#06C68F', ...props }, ref) => {
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
        <path d='M24 24H0V0h24v24z' fill='none' />
        <circle cx='12' cy='12' r='8' fill={fill} />
      </svg>
    )
  },
)

FiberManualRecordIcon.displayName = 'FiberManualRecordIcon'
