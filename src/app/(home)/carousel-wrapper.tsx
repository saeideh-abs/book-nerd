'use client'
import { useTranslations } from 'next-intl'
import { BooksCarousel } from '@/components'
import { useBooks } from '@/services/hooks/useBooks'

export default function CarouselWrapper() {
  const t = useTranslations()
  const { data: booksData, error } = useBooks()

  if (error) console.log(error)

  return (
    <BooksCarousel
      title={t('theMostPopularBooks')}
      subTitle={t('ourSuggestedBooks')}
      items={booksData?.pages ?? []}
    />
  )
}
