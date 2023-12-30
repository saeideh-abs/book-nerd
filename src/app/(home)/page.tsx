import { BooksCarousel } from '@/components'
import Categories from './_components/Categories'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Categories />
      <BooksCarousel />
    </div>
  )
}

export default Home
