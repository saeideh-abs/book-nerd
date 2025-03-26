// according to the react-anti-patterns book (e.g. page 282) and based on the
// single responsibility principal it's better to have distinct functions for fetching data
// over network requests and call those functions inside hooks, instead of
// calling the network requests directly inside the hooks.
// naming convention for these functions based on the book is setting "data" postfix e.g. fetchCityWeatherData

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
