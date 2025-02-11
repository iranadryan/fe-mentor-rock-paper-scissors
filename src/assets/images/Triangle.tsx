import { ComponentProps } from 'react'

export interface TriangleProps {
  className: ComponentProps<'svg'>['className']
}

export function Triangle({ className }: TriangleProps) {
  return (
    <svg
      width="313"
      height="278"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke="#000"
        strokeWidth="15"
        fill="none"
        opacity=".2"
        d="M156.5 262 300 8H13z"
      />
    </svg>
  )
}
