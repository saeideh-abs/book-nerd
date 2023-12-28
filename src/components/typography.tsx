import { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

const style = {
  displayLgReg: 'text-[3rem] font-normal leading-[3.75rem]', // size: 48px - weight: 400
  displayLgMed: 'text-[3rem] font-medium leading-[3.75rem]', // size: 48px - weight: 500
  displayLgSemibold: 'text-[3rem] font-semibold leading-[3.75rem]', // size: 48px - weight: 600
  displayLgBold: 'text-[3rem] font-semibold leading-[3.75rem]', // size: 48px - weight: 700

  displayMdReg: 'text-[2.25rem] font-normal leading-[2.75rem]', // size: 36px - weight: 400
  displayMdMed: 'text-[2.25rem] font-medium leading-[2.75rem]', // size: 36px - weight: 500
  displayMdSemibold: 'text-[2.25rem] font-semibold leading-[2.75rem]', // size: 36px - weight: 600
  displayMdBold: 'text-[2.25rem] font-semibold leading-[2.75rem]', // size: 36px - weight: 700

  displaySmReg: 'text-[1.875rem] font-normal leading-[2.375rem]', // size: 30px - weight: 400
  displaySmMed: 'text-[1.875rem] font-medium leading-[2.375rem]', // size: 30px - weight: 500
  displaySmSemibold: 'text-[1.875rem] font-semibold leading-[2.375rem]', // size: 30px - weight: 600
  displaySmBold: 'text-[1.875rem] font-bold leading-[2.375rem]', // size: 30px - weight: 700

  displayXsReg: 'text-[1.5rem] font-normal leading-[2rem]', // size: 24px - weight: 400
  displayXsMed: 'text-[1.5rem] font-medium leading-[2rem]', // size: 24px - weight: 500
  displayXsSemibold: 'text-[1.5rem] font-semibold leading-[2rem]', // size: 24px - weight: 600
  displayXsBold: 'text-[1.5rem] font-bold leading-[2rem]', // size: 24px - weight: 700

  textXlReg: 'text-[1.25rem] font-normal leading-[1.875rem]', // size: 20px - weight: 400
  textXlMed: 'text-[1.25rem] font-medium leading-[1.875rem]', // size: 20px - weight: 500
  textXlSemibold: 'text-[1.25rem] font-semibold leading-[1.875rem]', // size: 20px - weight: 600
  textXlBold: 'text-[1.25rem] font-bold leading-[1.875rem]', // size: 20px - weight: 700

  textLgReg: 'text-[1.125rem] font-normal leading-[1.75rem]', // size: 18px - weight: 400
  textLgMed: 'text-[1.125rem] font-medium leading-[1.75rem]', // size: 18px - weight: 500
  textLgSemibold: 'text-[1.125rem] font-semibold leading-[1.75rem]', // size: 18px - weight: 600
  textLgBold: 'text-[1.125rem] font-bold leading-[1.75rem]', // size: 18px - weight: 700

  textMdReg: 'text-[1rem] font-normal leading-[1.5rem]', // size: 16px - weight: 400
  textMdMed: 'text-[1rem] font-medium leading-[1.5rem]', // size: 16px - weight: 500
  textMdSemibold: 'text-[1rem] font-semibold leading-[1.5rem]', // size: 16px - weight: 600
  textMdBold: 'text-[1rem] font-bold leading-[1.5rem]', // size: 16px - weight: 700

  textSmReg: 'text-[0.875rem] font-normal leading-[1.25rem]', // size: 14px - weight: 400
  textSmMed: 'text-[0.875rem] font-medium leading-[1.25rem]', // size: 14px - weight: 500
  textSmSemibold: 'text-[0.875rem] font-semibold leading-[1.25rem]', // size: 14px - weight: 600
  textSmBold: 'text-[0.875rem] font-bold leading-[1.25rem]', // size: 14px - weight: 700

  textXsSemibold: 'text-[0.75rem] font-semibold leading-[1.125rem]', // size: 14px - weight: 600
}

export interface TypographyProps {
  component?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'caption'
    | 'p'
    | 'div'
  // | "subtitle"
  // | "body2"
  variant: keyof typeof style
  primary?: boolean
  className?: string
}

export const Typography = ({
  component: Comp = 'div',
  variant,
  primary,
  className,
  children,
}: PropsWithChildren<TypographyProps>) => {
  return (
    <Comp
      className={clsx(style[variant], primary && 'text-primary-500', className)}
    >
      {children}
    </Comp>
  )
}
