import * as React from 'react'

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Divider,
  Typography,
} from '@/components'
import { BooksCarouselHeader } from './BooksCarouselHeader'
import { BookBox } from '../BookBox'
import { IBookBoxItem } from '@/types'
import { useTranslations } from 'next-intl'

export interface BooksCarouselProps {
  items: IBookBoxItem[]
  title: string
  subTitle?: string
  viewMoreLink?: string
}

export function BooksCarousel({ items, title, subTitle }: BooksCarouselProps) {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center w-full gap-12 bg-bnLightBlue-100 p-layoutX md:p-layoutXMd">
      <BooksCarouselHeader title={title} subTitle={subTitle} />

      <Button variant="outlined" size="sm" className="-mt-5">
        {t('viewMore')}
      </Button>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.length ? (
            items.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 2xl:basis-1/5"
              >
                <BookBox item={item} />
              </CarouselItem>
            ))
          ) : (
            <EmptyBox />
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Divider />
    </div>
  )
}

const EmptyBox = () => {
  const t = useTranslations()

  return (
    <Typography
      variant="textMdReg"
      className="text-center text-gray-400 m-auto"
    >
      {t('nothingToShow')}
    </Typography>
  )
}
