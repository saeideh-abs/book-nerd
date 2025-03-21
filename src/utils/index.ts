import { BooksQueryType } from '@/services/book'
import { IBookBoxItem } from '@/types'
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

export const filterMainAuthor = (data: IBookBoxItem['author']) => {
  return data.filter(
    item => item.role === null || item.role === 'goodreads author',
  )
}

type AuthorType = Pick<BooksQueryType[number], 'book_author' | 'author'>
// TODO: move to a better place?
export const mergeAuthorAndRole = (
  a1: AuthorType['author'],
  a2: AuthorType['book_author'],
) =>
  a1.map(t1 => ({
    ...t1,
    ...{ role: a2.find(t2 => t2.author_id === t1.id)?.role ?? null },
  }))

export const convertAuthorsListToString = (
  authors: IBookBoxItem['author'],
): string => {
  return authors
    .map(
      (author, i) =>
        `${author.name}${
          authors.length !== 0 && i !== authors.length - 1 ? ',' : ''
        }`,
    )
    .join(' ')
}

export function getFromAndTo(page: number) {
  const from = page === 0 ? page * PAGE_SIZE : page * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  return [from, to]
}
