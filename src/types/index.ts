import { Tables } from './database'
import { BooksQueryType } from '@/hooks/useBooks'

export type { HeaderItemsType } from '@/components'

export interface IBookBoxItem {
  id: string
  title: string
  price: number | null
  // author: Tables<'author'>[]
  author: (Tables<'author'> & Pick<Tables<'book_author'>, 'role'>)[]
  coverImg: string
}

export type RemoteBookBoxItem = BooksQueryType[number]
