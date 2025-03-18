import { BaseBookBoxItem } from '@/models/BaseBookBoxItem'
import { fetchBooksQuery } from '@/services/book'
import { getFromAndTo } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'

export function useBooks() {
  return useInfiniteQuery({
    queryKey: ['books'],
    queryFn: async ({ pageParam = 0 }) => {
      const [from, to] = getFromAndTo(pageParam)
      const { data, error } = await fetchBooksQuery.range(from, to)

      if (error) throw error

      return data ? data.map(item => new BaseBookBoxItem(item)) : []
    },
    select: data => ({
      pages: [...data.pages.flat()],
      pageParams: [...data.pageParams],
    }),
    getNextPageParam: (_, pages) => pages.length,
  })
}

/********** old transformBooks */
// const transformBooks = (data: fetchBooksQueryType | null): BookBoxItemType[] => {
//   return data
//     ? data.map(item => ({
//         id: item.id,
//         title: item.title ?? '',
//         price: item.price,
//         author: mergeAuthorAndRole(item.author, item.book_author),
//         coverImg: item.cover_img,
//       }))
//     : []
// }

// export const useBooks = () => {
//   const [booksData, setBooksData] = useState<IBookBoxItem[]>([])
//   const getData = useCallback(async () => {
//     const { data, error, status } = await fetchBooksQuery.range(0, 19)
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
//     const { data, error } = await fetchBooksQuery.range(20, 29)

//     if (error) throw error

//     return formatBooks(data)
//   },
// })
