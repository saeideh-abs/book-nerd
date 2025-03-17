import { cn } from '@/utils'
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import { defaultStyle, disableStyle, sizeStyle, style } from './style'
import { IconSpinner } from '@/icons'

export type VariantType = 'text' | 'solid' | 'outlined'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren & ButtonProps
>(function (
  {
    variant = 'solid',
    color = 'primary',
    size = 'md',
    isLoading,
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        defaultStyle(variant),
        sizeStyle[size],
        style[variant][color],
        disableStyle,
        className,
      )}
      {...props}
    >
      {/* TODO: handle sizes for loader */}
      {isLoading && <IconSpinner className="w-5 h-5 animate-spin m-auto" />}
      <div className={cn(isLoading && 'opacity-0 h-0')}>{children}</div>
    </button>
  )
})

Button.displayName = 'Button'
