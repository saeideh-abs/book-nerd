'use client'
import { Typography, Button } from '@/components'

export default function BoxExplore() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-4 text-center border border-gray-300 rounded-xl">
      <Typography variant="displayMdMed" primary>
        Explore our Top Categories
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="lg"
        onClick={() => console.log('454545')}
      >
        View All
      </Button>
    </div>
  )
}
