import { BookBoxItemType } from '@/types'
import { getFromAndTo, mergeAuthorAndRole } from '@/utils'
import { supabaseClient } from '@/utils/supabaseClient'
import { QueryData } from '@supabase/supabase-js'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const booksQuery = supabaseClient
  .from('book')
  .select(`*, author (id, name), book_author (author_id, role)`)

export type BooksQueryType = QueryData<typeof booksQuery>

export function useBooks() {
  return useInfiniteQuery({
    queryKey: ['books'],
    queryFn: async ({ pageParam = 0 }) => {
      const [from, to] = getFromAndTo(pageParam)
      const { data, error } = await booksQuery.range(from, to)

      if (error) throw error

      return formatBooks(data)
    },
    select: data => ({
      pages: [...data.pages.flat()],
      pageParams: [...data.pageParams],
    }),
    getNextPageParam: (_, pages) => pages.length,
  })
}

export const formatBooks = (data: BooksQueryType | null): BookBoxItemType[] => {
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

// export const useBooks = () => {
//   const [booksData, setBooksData] = useState<BookBoxItemType[]>([])
//   const getData = useCallback(async () => {
//     const { data, error, status } = await booksQuery.range(0, 19)
//     if (error) throw error
//     setBooksData(formatBooks(data))
//     console.log(formatBooks(data), error, status)
//   }, [])
//   useEffect(() => {
//     getData()
//   }, [getData])
//   return [booksData]
// }

// return useQuery({
//   queryKey: ['books'],
//   queryFn: async () => {
//     const { data, error } = await booksQuery.range(20, 29)

//     if (error) throw error

//     return formatBooks(data)
//   },
// })
