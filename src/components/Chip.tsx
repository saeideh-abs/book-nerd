import { cn } from '@/utils'
import { PropsWithChildren } from 'react'

interface ChipProps {
  className?: string
}

export default function Chip({
  children,
  className,
}: PropsWithChildren & ChipProps) {
  return (
    <div
      className={cn(
        'px-2 py-1 rounded-md bg-secondary-50 text-secondary-600 text-xs font-medium',
        className,
      )}
    >
      {children}
    </div>
  )
}
