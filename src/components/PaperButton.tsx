import { ComponentProps } from 'react'
import { PaperIcon } from '../assets/icons/PaperIcon'
import { cn } from '../utils/cn'

interface PaperButtonProps {
  className?: ComponentProps<'div'>['className']
  disabled?: ComponentProps<'button'>['disabled']
}

export function PaperButton({ className, disabled }: PaperButtonProps) {
  return (
    <div className={cn('relative', className)}>
      <button
        disabled={disabled}
        className="flex h-[194px] w-[198px] items-center justify-center rounded-full bg-paper-gradient transition-all duration-300 active:translate-y-[10px] disabled:active:translate-y-0"
      >
        <div className="flex h-[152px] w-[152px] items-center justify-center rounded-full bg-button-inside shadow-button-inset">
          <PaperIcon height={81.88} />
        </div>
      </button>
      <div className="absolute left-0 top-[10px] z-[-1] h-[194px] w-[198px] rounded-full bg-paper-backdrop"></div>
    </div>
  )
}
