import { fetchGenresByBookIdQuery } from '@/services/genre'
import { useQuery } from '@tanstack/react-query'

export function useBookGenre(bookId: string) {
  return useQuery({
    queryKey: ['bookGenre', bookId],
    queryFn: async () => {
      const { data, error } = await fetchGenresByBookIdQuery(bookId)

      if (error) throw error

      return data
    },
    enabled: !!bookId,
  })
}
