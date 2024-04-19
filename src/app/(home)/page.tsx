'use client'
import { supabaseClient } from '@/utils/supabaseClient'
import { BooksCarousel, BooksCarouselProps } from '@/components'
import Categories from './_components/Categories'
import { useCallback, useEffect, useState } from 'react'
import { Tables } from '@/types/database'
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
