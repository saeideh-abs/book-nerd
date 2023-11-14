import Link from 'next/link'
import { HeaderItemType } from './types'
import { style } from './style'

interface HeaderItemProps {
  item: HeaderItemType
  active?: boolean
}

export default function HeaderItem({ item, active }: HeaderItemProps) {
  return (
    <Link href={item.route} css={[style.item, active && style.itemActive]}>
      {item.icon && <item.icon tw="text-2xl flex-none" />}
      {item.title}
    </Link>
  )
}
