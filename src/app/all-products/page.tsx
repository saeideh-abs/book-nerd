'use client'
import { Button } from '@/components'
import { BookBox } from '@/components/BookBox'
import { BooksCarouselHeader } from '@/components/BooksCarousel/BooksCarouselHeader'
import { useBooks } from '@/hooks/useBooks'

export default function AllProducts() {
  const { data: booksData, error, fetchNextPage } = useBooks()

  if (error) console.log(error)

  return (
    <div className="flex flex-col items-center m-8 gap-4 mt-10">
      <BooksCarouselHeader title="All Products" />
      <div className="grid gap-5  md:grid-cols-3 lg:grid-cols-4 2xl:gris-cols-5">
        {booksData?.pages?.map(item => <BookBox key={item.id} item={item} />)}
      </div>

      {/* TODO: when loading: disabled */}
      <Button
        variant="outlined"
        size="sm"
        className="mt-3"
        onClick={() => {
          fetchNextPage()
          console.log('fecth next apge')
        }}
      >
        View More
      </Button>
    </div>
  )
}
