import { PropsWithChildren } from 'react'
import HeaderItems from './HeaderItems'
import { HeaderItemType } from './types'
import { style } from './style'
import { getTranslations } from 'next-intl/server'
import { HeaderItemsType } from './types'

export const getHeaderItems = async (): Promise<HeaderItemsType> => {
  const t = await getTranslations()

  return [
    { title: t('home'), route: '/' },
    { title: t('aboutUs'), route: '#' },
    { title: t('contactUs'), route: '#' },
  ]
}

export interface HeaderProps {
  items: HeaderItemType[]
}

export function Header({ items, children }: PropsWithChildren & HeaderProps) {
  return (
    <div>
      <header className={style.container}>
        <HeaderItems items={items} />
      </header>
      {children}
    </div>
  )
}

export * from './types'
