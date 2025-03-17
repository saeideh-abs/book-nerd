'use client'
import { useTranslations } from 'next-intl'
import {
  cn,
  convertAuthorsListToString,
  customImageLoader,
  filterMainAuthor,
} from '@/utils'
import Image from 'next/image'
import { Typography } from '../Typography'
import { PropsWithChildren } from 'react'
import { IBookBoxItem } from '@/types'

export interface BookBoxProps {
  item: IBookBoxItem
  className?: string
}

export function BookBox({ item, className }: BookBoxProps) {
  const t = useTranslations()

  return (
    <Card className={className}>
      <Image
        src={item.coverImg}
        width={0}
        height={0}
        sizes="(min-width: 768px) 50vw, (min-width: 1024px) 25vw,(min-width: 1280px) 25vw, 100vw"
        className="w-[200px] h-auto"
        alt=""
        loader={customImageLoader}
      />
      <div className="flex flex-col justify-end grow">
        <Typography variant="textLgSemibold" className="mt-3 text-primary-500">
          {item.title}
        </Typography>

        {/* authors list */}
        <Typography variant="textSmReg" className="text-bnGray-400">
          {convertAuthorsListToString(filterMainAuthor(item.author))}
        </Typography>

        <Typography
          variant="textMdBold"
          className={cn('mt-3 text-secondary-500', !item.price && 'invisible')}
        >
          {item.price ? `$${item.price}` : t('unknown')}
        </Typography>
      </div>
    </Card>
  )
}

const Card = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center p-6 border text-center border-gray-200 bg-white rounded-sm 
          w-full h-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] hover:opacity-50 hover:cursor-pointer`,
        className,
      )}
    >
      {children}
    </div>
  )
}
