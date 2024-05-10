'use client'
import { useRouter } from 'next/navigation'
import { Typography, Button } from '@/components'
import { routes } from '@/app/routes'

export default function BoxExplore() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-10 text-center border border-gray-300 rounded-xl">
      <Typography variant="displayMdMed" primary>
        Explore our Top Categories
      </Typography>
      <Button
        variant="solid"
        color="secondary"
        size="lg"
        onClick={() => router.push(routes.allProducts)}
      >
        View All
      </Button>
    </div>
  )
}
