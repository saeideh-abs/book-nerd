'use client'
import { useTranslations } from 'next-intl'
import { Button } from '@/components'
import { BookBox } from '@/components/BookBox'
import { BooksCarouselHeader } from '@/components/BooksCarousel/BooksCarouselHeader'
import { useBooks } from '@/hooks/useBooks'

export default function AllProducts() {
  const { data: booksData, error, fetchNextPage } = useBooks()
  const t = useTranslations()

  if (error) console.log(error) // TODO: handle error

  return (
    <div className="flex flex-col items-center m-8 gap-4 mt-10">
      <BooksCarouselHeader title={t('allProducts')} />
      <div className="grid gap-5  md:grid-cols-3 lg:grid-cols-4 2xl:gris-cols-5">
        {booksData?.pages?.map(item => <BookBox key={item.id} item={item} />)}
      </div>

      {/* TODO: when loading: disabled */}
      <Button
        variant="outlined"
        size="sm"
        className="mt-3"
        onClick={() => fetchNextPage()}
      >
        {t('viewMore')}
      </Button>
    </div>
  )
}
