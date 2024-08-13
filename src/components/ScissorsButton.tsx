import { ComponentProps } from 'react'
import { ScissorsIcon } from '../assets/icons/ScissorsIcon'
import { cn } from '../utils/cn'

interface ScissorsButtonProps {
  className?: ComponentProps<'div'>['className']
  disabled?: ComponentProps<'button'>['disabled']
}

export function ScissorsButton({ className, disabled }: ScissorsButtonProps) {
  return (
    <div className={cn('relative', className)}>
      <button
        disabled={disabled}
        className="flex h-[194px] w-[198px] items-center justify-center rounded-full bg-scissors-gradient transition-all duration-300 active:translate-y-[10px] disabled:active:translate-y-0"
      >
        <div className="flex h-[152px] w-[152px] items-center justify-center rounded-full bg-button-inside shadow-button-inset">
          <ScissorsIcon height={80} />
        </div>
      </button>
      <div className="absolute left-0 top-[10px] z-[-1] h-[194px] w-[198px] rounded-full bg-scissors-backdrop"></div>
    </div>
  )
}
