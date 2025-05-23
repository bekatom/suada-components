import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const MaximizeIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
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
      <path d='M15 1.5V3H19.9395L13.5 9.4365L14.5605 10.5L21 4.0605V9H22.5V1.5H15Z' fill='white' />
      <path
        d='M10.5 14.562L9.444 13.5L3 19.9395V15H1.5V22.5H9V21H4.0605L10.5 14.562Z'
        fill='white'
      />
    </svg>
  )
}
