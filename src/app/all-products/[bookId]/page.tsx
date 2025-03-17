'use client'
import { Divider, Typography } from '@/components'
import { BookBox } from '@/components/BookBox'
import Chip from '@/components/Chip'
import { useBook } from '@/hooks/useBook'
import { useBookGenre } from '@/hooks/useBookGenre'
import { convertAuthorsListToString, filterMainAuthor } from '@/utils'
import { useTranslations } from 'next-intl'

// TODO: make this server side component?
export default function BookDetails({
  params,
}: {
  params: { bookId: string }
}) {
  const t = useTranslations()
  const { data: bookData, error: bookError } = useBook(params.bookId)
  const { data: genreData, error: genreError } = useBookGenre(params.bookId)

  if (bookError || genreError) console.log('eror occured') // TODO: handle error

  return (
    <div className="flex flex-col md:flex-row gap-10 p-layoutXMd">
      {bookData ? (
        <>
          <div className="md:w-1/4">
            {
              <BookBox
                className="h-auto w-fit md:w-full m-auto hover:cursor-auto"
                item={bookData}
              />
            }
          </div>

          <div className="md:w-3/4">
            <div className="flex flex-col gap-3">
              <Typography
                variant="displaySmSemibold"
                className="text-primary-500"
              >
                {bookData.title}
              </Typography>

              {/* author */}
              <Typography variant="textLgReg" className="text-bnGray-400">
                {convertAuthorsListToString(
                  filterMainAuthor(bookData.author),
                ).toTitleCase()}
              </Typography>

              {/* pages and format */}
              <Typography variant="textSmReg" className="text-bnGray-400">
                {bookData?.pages
                  ? `${bookData.pages} ${t('pages')}, `
                  : t('unknown')}
                {bookData.bookFormat}
              </Typography>

              {/* genres */}
              <div className="flex flex-wrap gap-2">
                {genreData?.map(genre => (
                  <Chip key={genre.id}>{genre.name.toTitleCase()}</Chip>
                ))}
              </div>

              <Divider className="my-3" />

              <Typography variant="textMdReg" primary>
                {bookData?.description}
              </Typography>
            </div>
          </div>
        </>
      ) : (
        // TODO: create no data component
        <div>Book not found</div>
      )}
    </div>
  )
}
