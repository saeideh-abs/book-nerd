import { PropsWithChildren } from 'react'
import HeaderItems from './HeaderItems'
import { HeaderItemType } from './types'
import { style } from './style'

export interface HeaderProps {
  items: HeaderItemType[]
}

export function Header({ items }: HeaderProps) {
  return (
    <Container>
      <HeaderItems items={items} />
    </Container>
  )
}

const Container = ({ children }: PropsWithChildren) => {
  return <header className={style.container}>{children}</header>
}
export * from './types'
