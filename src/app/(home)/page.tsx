import { Typography } from '@/components/typography'
import Box from './_components/Box'
import { CategoryItemType } from './types'

const Home = () => {
  const categoryItems: CategoryItemType[] = [
    {
      type: 'photo',
      imgAddress: '/images/box-books.jpg',
      title: 'Higher Education',
    },
    {
      type: 'text',
      title: 'Explore our Top Categories',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-library.jpg',
      title: 'Management Books',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-1.jpg',
      title: 'Finance Books',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-2.jpg',
      title: 'Engineering Books',
    },
    {
      type: 'photo',
      imgAddress: '/images/box-laptop-3.jpg',
      title: 'Commerce books',
    },
  ]

  return (
    <div className="flex justify-center p-layoutX">
      <div className="grid grid-cols-6 gap-8 max-w-[100%] 2xl:max-w-[1500px] 3xl:max-w-[85%]">
        {categoryItems.map((item, index) => (
          <div key={index} className="col-span-2">
            {item.type === 'photo' ? (
              <Box address={item.imgAddress ?? ''} title={item.title} />
            ) : (
              <div className="flex items-center justify-center w-full h-full p-4 text-center border border-gray-300 rounded-xl">
                <Typography variant="displayXsMed" primary>
                  Explore our Top Categories
                </Typography>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
