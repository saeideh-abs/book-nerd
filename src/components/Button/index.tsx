'use client'
import { cn } from '@/utils'
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'solid' | 'outlined'
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
  const defaultStyle = cn(
    `rounded-md outline-none`,
    variant === 'outlined' && 'border bg-transparent',
    variant === 'solid' && 'font-medium',
  )
  const sizeStyle = {
    sm: `px-6 py-2 text-sm`,
    md: 'px-8 py-3 text-normal',
    lg: 'px-10 py-4 text-lg',
  }

  const style = {
    text: {
      primary: `text-primary-500 hover:text-primary-600`,
      secondary: `text-secondary-500 hover:text-secondary-600`,
    },
    solid: {
      primary: `bg-primary-500 text-primary-contrast hover:bg-primary-600`,
      secondary: `bg-secondary-500 text-secondary-contrast hover:bg-secondary-600`,
    },
    outlined: {
      primary: `border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50/50`,
      secondary: `border-secondary-500 text-secondary-500 hover:border-secondary-600 hover:text-secondary-600 hover:bg-secondary-50/50`,
    },
  }

  return (
    <button
      ref={ref}
      className={cn(
        defaultStyle,
        sizeStyle[size],
        style[variant][color],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
