import { IBookBoxItem, RemoteBookBoxItem } from '@/types'
import { mergeAuthorAndRole } from '@/utils'

export class BaseBookBoxItem implements IBookBoxItem {
  private readonly _id: string
  private readonly _title: string
  private readonly _price: number | null
  private readonly _author: IBookBoxItem['author']
  private readonly _coverImg: string

  constructor(item: RemoteBookBoxItem) {
    this._id = item.id
    this._title = item.title ?? ''
    this._price = item.price
    this._author = mergeAuthorAndRole(item.author, item.book_author)
    this._coverImg = item.cover_img
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get price() {
    return this._price
  }

  get author() {
    return this._author
  }

  get coverImg() {
    return this._coverImg
  }
}
