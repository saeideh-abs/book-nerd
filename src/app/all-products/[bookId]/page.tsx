'use client'
import { Divider, Typography } from '@/components'
import { BookBox } from '@/components/BookBox'
import { useBook } from '@/hooks/useBook'
import { convertAuthorsListToString, filterMainAuthor } from '@/utils'
import { useTranslations } from 'next-intl'

export default function BookDetails({
  params,
}: {
  params: { bookId: string }
}) {
  const { data: bookData, error } = useBook(params.bookId)
  const t = useTranslations()

  if (error) console.log(error) // TODO: handle error

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
            <div className="flex flex-col">
              <Typography
                variant="displaySmSemibold"
                className="mt-3 text-primary-500"
              >
                {bookData.title}
              </Typography>

              <Typography variant="textLgReg" className="mt-3 text-bnGray-400">
                {convertAuthorsListToString(
                  filterMainAuthor(bookData.author),
                ).toTitleCase()}
              </Typography>
              <Typography variant="textSmReg" className="mt-3 text-bnGray-400">
                {bookData?.pages
                  ? `${bookData.pages} ${t('pages')}, `
                  : t('unknown')}
                {bookData.bookFormat}
              </Typography>
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
