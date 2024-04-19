import { cn } from '@/utils'
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import { defaultStyle, disableStyle, sizeStyle, style } from './style'

export type VariantType = 'text' | 'solid' | 'outlined'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren & ButtonProps
>(function (
  {
    variant = 'solid',
    color = 'primary',
    size = 'md',
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
      {children}
    </button>
  )
})

Button.displayName = 'Button'
