import { supabaseClient } from '@/utils/supabaseClient'

// TODO: remove book_genre obj from results
export const fetchGenresByBookIdQuery = (bookId: string) => {
  return supabaseClient
    .from('genre')
    .select('id, name, book_genre!inner(book_id, genre_id)')
    .eq('book_genre.book_id', bookId)
}
