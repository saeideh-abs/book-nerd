'use client'
import { supabaseClient } from '@/utils/supabaseClient'
import { BooksCarousel, BooksCarouselProps } from '@/components'
import Categories from './_components/Categories'
import { useCallback, useEffect, useState } from 'react'
import { Tables } from '@/types/database'

const Home = () => {
  const [booksData, setBooksData] = useState<BooksCarouselProps['items']>([])

  const getData = useCallback(async () => {
    const { data, error, status } = await supabaseClient
      .from('book')
      .select('*')
      .limit(20)

    setBooksData(formatData(data))
    console.log(data, error, status)
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const formatData = (
    data: Tables<'book'>[] | null,
  ): BooksCarouselProps['items'] => {
    return data
      ? data.map((item: Tables<'book'>) => ({
          title: item.title ?? '',
          price: item.price,
          authorName: 'Julia Robert',
          coverImg: item.cover_img,
        }))
      : []
  }

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
