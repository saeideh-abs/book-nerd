'use client'
import { useTranslations } from 'next-intl'
import { Button } from '@/components'
import { BookBox } from '@/components/BookBox'
import { BooksCarouselHeader } from '@/components/BooksCarousel/BooksCarouselHeader'
import { useBooks } from '@/hooks/useBooks'
import Link from 'next/link'
import { useBook } from '@/hooks/useBook'

export default function AllProducts() {
  const { data: booksData, error, isFetching, fetchNextPage } = useBooks()
  const t = useTranslations()

  if (error) console.log(error) // TODO: handle error

  return (
    <div className="flex flex-col items-center m-8 gap-4 mt-10">
      <BooksCarouselHeader title={t('allProducts')} />
      <div className="grid gap-5  md:grid-cols-3 lg:grid-cols-4 2xl:gris-cols-5">
        {booksData?.pages?.map(item => (
          // TODO: update routes file
          <Link href={`/all-products/${item.id}`} key={item.id}>
            <BookBox item={item} />
          </Link>
        ))}
      </div>

      <Button
        className="mt-3"
        variant="outlined"
        size="sm"
        isLoading={isFetching}
        disabled={isFetching}
        onClick={() => fetchNextPage()}
      >
        {t('viewMore')}
      </Button>
    </div>
  )
}
