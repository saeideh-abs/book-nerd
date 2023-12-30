import { Divider } from '../Divider'
import { Typography } from '../Typography'

export const BooksCarouselHeader = ({
  title,
  subTitle,
}: {
  title: string
  subTitle?: string
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <Typography variant="textSmMed" className="text-center text-bnGray-300">
        {subTitle}
      </Typography>
      <div className="flex items-center w-full gap-3">
        <Divider />
        <Typography
          component="h2"
          variant="displayMdSemibold"
          className="whitespace-nowrap text-primary-500"
        >
          {title}
        </Typography>
        <Divider />
      </div>
    </div>
  )
}
