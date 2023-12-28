import { Typography } from '@/components'
import Box from './_components/Box'
import { CategoryItemType } from './types'
import BoxExplore from './_components/BoxExplore'

const Home = () => {
  const categoryItems: CategoryItemType[] = [
    {
      type: 'photo',
      imgAddress: '/images/box-books.jpg',
      title: 'Romance Books',
    },
    {
      type: 'text',
      title: 'Explore our Top Categories',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-library.jpg',
      title: 'Historical Books',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-1.jpg',
      title: 'Psychology Books',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-2.jpg',
      title: 'Childrens Books',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-3.jpg',
      title: 'Science Fiction books',
    },
  ]

  return (
    <div className="flex justify-center p-layoutX">
      <div className="grid md:grid-cols-3 gap-8 max-w-[100%] 2xl:max-w-[1500px] 3xl:max-w-[85%]">
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
    </div>
  )
}

export default Home
