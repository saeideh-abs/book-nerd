'use client'
import { BooksCarousel } from '@/components'
import Categories from './_components/Categories'
import { useBooks } from '@/hooks/useBooks'

const Home = () => {
  const { data: booksData, error } = useBooks()

  if (error) console.log(error)

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Categories />
      <BooksCarousel
        title="The Most Popular Books"
        subTitle="Our Suggested Books"
        items={booksData?.pages ?? []}
      />
    </div>
  )
}

export default Home
