import * as React from 'react'

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Divider,
} from '@/components'
import { BooksCarouselHeader } from './BooksCarouselHeader'
import { BookBox, BookBoxItemType } from '../BookBox'

export interface BooksCarouselProps {
  items: BookBoxItemType[]
}

export function BooksCarousel({ items }: BooksCarouselProps) {
  return (
    <div className="flex flex-col items-center w-full gap-12 bg-bnLightBlue-100 p-layoutX">
      <BooksCarouselHeader
        title="The Most Popular Books"
        subTitle="Our Suggested Books"
      />

      <Button variant="outlined" size="sm" className="-mt-5">
        View More
      </Button>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 2xl:basis-1/5"
            >
              <BookBox item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Divider />
    </div>
  )
}
