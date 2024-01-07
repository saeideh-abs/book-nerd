import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// custom nextjs image loader
export const customImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string
  width: number | string
  quality?: number
}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
