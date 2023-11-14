export interface HeaderItemType {
  title: string
  route: string
  id?: string | number
  icon?: React.ComponentType
}

export type HeaderItemsType = HeaderItemType[]