import { BooksQueryType } from '@/hooks/useBooks'
import { BookBoxItemType } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { PAGE_SIZE } from './constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// custom nextjs image loader
export const customImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string
  width: number | string
  quality?: number
}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const filterMainAuthor = (data: BookBoxItemType['author']) => {
  return data.filter(
    item => item.role === null || item.role === 'goodreads author',
  )
}

type AuthorType = Pick<BooksQueryType[number], 'book_author' | 'author'>
export const mergeAuthorAndRole = (
  a1: AuthorType['author'],
  a2: AuthorType['book_author'],
) =>
  a1.map(t1 => ({
    ...t1,
    ...{ role: a2.find(t2 => t2.author_id === t1.id)?.role ?? null },
  }))

export function getFromAndTo(page: number) {
  const from = page === 0 ? page * PAGE_SIZE : page * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  return [from, to]
}
