import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const AnalyticsIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path
          d='M2 1H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H15V14H2V1Z'
          fill='#020210'
        />
        <path
          d='M15 4.5H11.5V5.5H13.295L9.5 9.295L7.355 7.145C7.30852 7.09814 7.25322 7.06094 7.19229 7.03555C7.13136 7.01017 7.06601 6.9971 7 6.9971C6.93399 6.9971 6.86864 7.01017 6.80771 7.03555C6.74678 7.06094 6.69148 7.09814 6.645 7.145L3 10.795L3.705 11.5L7 8.205L9.145 10.355C9.19148 10.4019 9.24678 10.4391 9.30771 10.4644C9.36864 10.4898 9.43399 10.5029 9.5 10.5029C9.56601 10.5029 9.63136 10.4898 9.69229 10.4644C9.75322 10.4391 9.80852 10.4019 9.855 10.355L14 6.205V8H15V4.5Z'
          fill='#020210'
        />
      </svg>
    )
  },
)

AnalyticsIcon.displayName = 'AnalyticsIcon'
