import { IBookBoxItem, RemoteBookBoxItem } from '@/types'
import { mergeAuthorAndRole } from '@/utils'

export class BaseBookBoxItem implements IBookBoxItem {
  private readonly _id: string
  private readonly _title: string
  private readonly _price: number | null
  private readonly _author: IBookBoxItem['author']
  private readonly _coverImg: string
  private readonly _description: string
  private readonly _pages: number | null
  private readonly _bookFormat: string | null

  constructor(item: RemoteBookBoxItem) {
    this._id = item.id
    this._title = item.title ?? ''
    this._price = item.price
    this._author = mergeAuthorAndRole(item.author, item.book_author)
    this._coverImg = item.cover_img
    this._description = item.description
    this._pages = item.pages
    this._bookFormat = item.book_format
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

  get description() {
    return this._description
  }

  get pages() {
    return this._pages
  }

  get bookFormat() {
    return this._bookFormat
  }
}
