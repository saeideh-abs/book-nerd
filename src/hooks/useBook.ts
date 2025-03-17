import { BaseBookBoxItem } from '@/models/BaseBookBoxItem'
import { fetchBooksQuery } from '@/services/book'
import { useQuery } from '@tanstack/react-query'

export function useBook(bookId: string) {
  return useQuery({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const { data, error } = await fetchBooksQuery.eq('id', bookId).single()
      if (error) throw error

      return new BaseBookBoxItem(data)
    },
    enabled: !!bookId,
  })
}
