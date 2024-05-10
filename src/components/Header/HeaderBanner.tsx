import Image from 'next/image'
import { startCase } from 'lodash-es'
import { PropsWithChildren } from 'react'
import { Typography } from '../Typography'

interface HeaderBannerProps {
  title: string
  description: string
}
export default function HeaderBanner({
  title,
  description,
}: HeaderBannerProps) {
  return (
    <div className="relative flex w-full px-layoutX py-6 bg-gradient-to-r text-primary-500 from-secondary-100 to-70% to-[#F5FFFE]">
      <TextWrapper>
        <Typography variant="displayLgMed" className="mb-4">
          {startCase(title)}
        </Typography>
        <Typography
          variant="textXlMed"
          component="p"
          className="whitespace-pre-line"
        >
          {description}
        </Typography>
      </TextWrapper>

      <Image
        src="/images/books.png"
        width="0"
        height="0"
        sizes="100vw"
        className="w-0 md:w-[350px] h-auto"
        alt=""
      />
    </div>
  )
}

const TextWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-left grow">
      {children}
    </div>
  )
}
