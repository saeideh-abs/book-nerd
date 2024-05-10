import { Tables } from './database'

export type { HeaderItemsType } from '@/components'

export interface BookBoxItemType {
  id: string
  title: string
  price: number | null
  // author: Tables<'author'>[]
  author: (Tables<'author'> & Pick<Tables<'book_author'>, 'role'>)[]
  coverImg: string
}
