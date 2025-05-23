import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const DeleteIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path d='M8.75 7.5H7.5V15H8.75V7.5Z' fill='#68707A' />
        <path d='M12.5 7.5H11.25V15H12.5V7.5Z' fill='#68707A' />
        <path
          d='M2.5 3.75V5H3.75V17.5C3.75 17.8315 3.8817 18.1495 4.11612 18.3839C4.35054 18.6183 4.66848 18.75 5 18.75H15C15.3315 18.75 15.6495 18.6183 15.8839 18.3839C16.1183 18.1495 16.25 17.8315 16.25 17.5V5H17.5V3.75H2.5ZM5 17.5V5H15V17.5H5Z'
          fill='#68707A'
        />
        <path d='M12.5 1.25H7.5V2.5H12.5V1.25Z' fill='#68707A' />
      </svg>
    )
  },
)

DeleteIcon.displayName = 'DeleteIcon'
