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
import { cn } from '@/utils'
import { BooksCarouselHeader } from './BooksCarouselHeader'

export function BooksCarousel() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div
                className={cn(
                  'p-6 border text-center border-gray-200 bg-white rounded-sm w-[326px] h-[437px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]',
                )}
              >
                {/* <h3>My Book</h3>
                <h3>Title</h3>
                <h3>Sub title</h3> */}
                <span className="text-3xl font-semibold leading-[600px]">
                  {index + 1}
                </span>
              </div>
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
