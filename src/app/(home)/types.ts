export type CategoryItemType =
  | {
    type: 'photo'
    imgAddress: string
    title: string
  }
  | {
    type: 'text'
    title: string
  }
