'use client'
import { BookBox } from '@/components/BookBox'
import { BooksCarouselHeader } from '@/components/BooksCarousel/BooksCarouselHeader'
import { useBooks } from '@/hooks/useBooks'

export default function AllProducts() {
  const [booksData] = useBooks()

  return (
    <div className="flex flex-col m-8 gap-4 mt-10">
      <BooksCarouselHeader title="All Products" />
      <div className="grid gap-5  md:grid-cols-3 lg:grid-cols-4 2xl:gris-cols-5">
        {booksData.map(item => (
          <BookBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
