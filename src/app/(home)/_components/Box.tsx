import { Typography } from '@/components/typography'
import Image from 'next/image'

export interface BoxProps {
  address: string
  title?: string
}

export default function Box({ address, title }: BoxProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={address}
        width="0"
        height="0"
        sizes="100vw"
        className="object-cover object-center w-full h-full rounded-xl"
        alt=""
      />

      <Typography
        variant="displayXsMed"
        component="h3"
        className="absolute text-white -translate-x-1/2 cursor-pointer bottom-6 left-1/2"
      >
        {title}
      </Typography>
    </div>
  )
}
