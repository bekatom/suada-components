import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const MinimizeIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <path d='M3 13.5V15H7.9395L1.5 21.4365L2.5605 22.5L9 16.0605V21H10.5V13.5H3Z' fill='white' />
      <path
        d='M22.5 2.562L21.444 1.5L15 7.9395V3H13.5V10.5H21V9H16.0605L22.5 2.562Z'
        fill='white'
      />
    </svg>
  )
}
