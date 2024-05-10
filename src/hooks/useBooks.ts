import { BookBoxItemType } from '@/types'
import { mergeAuthorAndRole } from '@/utils'
import { supabaseClient } from '@/utils/supabaseClient'
import { QueryData } from '@supabase/supabase-js'
import { useCallback, useEffect, useState } from 'react'

const booksQuery = supabaseClient
  .from('book')
  .select(`*, author (id, name), book_author (author_id, role)`)

export type BooksQueryType = QueryData<typeof booksQuery>

export const useBooks = () => {
  const [booksData, setBooksData] = useState<BookBoxItemType[]>([])

  const getData = useCallback(async () => {
    const { data, error, status } = await booksQuery.range(0, 19)

    if (error) throw error

    setBooksData(formatBooks(data))
    console.log(formatBooks(data), error, status)
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return [booksData]
}

const formatBooks = (data: BooksQueryType | null): BookBoxItemType[] => {
  return data
    ? data.map(item => ({
        id: item.id,
        title: item.title ?? '',
        price: item.price,
        author: mergeAuthorAndRole(item.author, item.book_author),
        coverImg: item.cover_img,
      }))
    : []
}
