import { Tables } from './database'
import { BooksQueryType } from '@/services/book'

export type { HeaderItemsType } from '@/components'

export interface IBookBoxItem {
  id: string
  title: string
  price: number | null
  // author: Tables<'author'>[]
  author: (Tables<'author'> & Pick<Tables<'book_author'>, 'role'>)[]
  coverImg: string
  description: string
  pages: number | null
  bookFormat: string | null
}

export type RemoteBookBoxItem = BooksQueryType[number]
