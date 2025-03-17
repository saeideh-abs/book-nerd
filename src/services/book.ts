import { supabaseClient } from '@/utils/supabaseClient'
import { QueryData } from '@supabase/supabase-js'

export type BooksQueryType = QueryData<typeof fetchBooksQuery>

export const fetchBooksQuery = supabaseClient
  .from('book')
  .select(`*, author (id, name), book_author (author_id, role)`)

export const fetchBookByIdQuery = (bookId: string) =>
  supabaseClient
    .from('book')
    .select(`*, author (id, name), book_author (author_id, role)`)
    .eq('id', bookId)
    .single()
