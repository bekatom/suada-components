import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const RemoveFilter = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='20'
        height='20'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path
          d='M15 5.707L14.293 5L12 7.293L9.707 5L9 5.707L11.293 8L9 10.2925L9.7075 11L12 8.707L14.2935 11L15 10.2935L12.707 8L15 5.707Z'
          fill='#020210'
        />
        <path
          d='M2 2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V4.58545C0.999989 4.7168 1.02585 4.84687 1.07612 4.96822C1.12638 5.08957 1.20006 5.19983 1.29295 5.2927L5 9V13C5 13.2652 5.10536 13.5196 5.29289 13.7071C5.48043 13.8946 5.73478 14 6 14H8C8.26522 14 8.51957 13.8946 8.70711 13.7071C8.89464 13.5196 9 13.2652 9 13V12H8V13H6V8.58545L2 4.58545V3H12V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H2Z'
          fill='#020210'
        />
      </svg>
    )
  },
)

RemoveFilter.displayName = 'RemoveFilter'
