import { getTranslations } from 'next-intl/server'
import { CategoryItemType } from '../types'
import Box from './Box'
import BoxExplore from './BoxExplore'

export default async function Categories() {
  const t = await getTranslations()

  const categoryItems: CategoryItemType[] = [
    {
      type: 'photo',
      imgAddress: '/images/box-books.jpg',
      title: t('romanceBooks'),
    },
    {
      type: 'text',
      title: t('exploreTopCategories'),
    },
    {
      type: 'photo',
      imgAddress: '/images/box-library.jpg',
      title: t('historicalBooks'),
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-1.jpg',
      title: t('psychologyBooks'),
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-2.jpg',
      title: t('childrensBooks'),
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-3.jpg',
      title: t('scienceFictionBooks'),
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-[100%] 2xl:max-w-[1500px] 3xl:max-w-[85%] p-layoutX">
      {categoryItems.map((item, index) => (
        <div key={index}>
          {item.type === 'photo' ? (
            <Box address={item.imgAddress ?? ''} title={item.title} />
          ) : (
            <BoxExplore />
          )}
        </div>
      ))}
    </div>
  )
}
