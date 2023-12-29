import Link from 'next/link'
import { Typography } from '../Typography'

export type FooterColumnItem = {
  title: string
  route: string
}
export interface FooterColumnProps {
  title: string
  items: FooterColumnItem[]
}

export const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="text-white">
      <Typography variant="displayXsSemibold" className="mb-10">
        {title}
      </Typography>
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <Link key={index} href={item.route}>
            <Typography variant="textLgSemibold">{item.title}</Typography>
          </Link>
        ))}
      </div>
    </div>
  )
}
