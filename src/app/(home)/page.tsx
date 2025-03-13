import Categories from './_components/Categories'
import CarouselWrapper from './carousel-wrapper'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Categories />
      <CarouselWrapper />
    </div>
  )
}
