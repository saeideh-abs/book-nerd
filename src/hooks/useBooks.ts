import { BooksCarouselProps } from '@/components'
import { Tables } from '@/types/database'
import { supabaseClient } from '@/utils/supabaseClient'
import { useCallback, useEffect, useState } from 'react'

export const useBooks = () => {
  // todo: fix the type of items
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
          id: item.id,
          title: item.title ?? '',
          price: item.price,
          authorName: 'Julia Robert',
          coverImg: item.cover_img,
        }))
      : []
  }

  return [booksData]
}
