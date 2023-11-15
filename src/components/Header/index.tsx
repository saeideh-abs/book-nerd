import { PropsWithChildren } from 'react'
import HeaderItems from './HeaderItems'
import { HeaderItemType } from './types'
import { style } from './style'

export interface HeaderProps {
  items: HeaderItemType[]
}

export function Header({ items, children }: PropsWithChildren & HeaderProps) {
  return (
    <div>
      <Container>
        <HeaderItems items={items} />
      </Container>
      {children}
    </div>
  )
}

const Container = ({ children }: PropsWithChildren) => {
  return <header className={style.container}>{children}</header>
}
export * from './types'
