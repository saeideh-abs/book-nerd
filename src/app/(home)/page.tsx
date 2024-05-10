'use client'
import { BooksCarousel } from '@/components'
import Categories from './_components/Categories'
import { useBooks } from '@/hooks/useBooks'

const Home = () => {
  const [booksData] = useBooks()

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Categories />
      <BooksCarousel
        title="The Most Popular Books"
        subTitle="Our Suggested Books"
        items={booksData}
      />
    </div>
  )
}

export default Home
