'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
// import strings to be available in client-side components
// Note: a better approach is creating a utility function
import '@/utils/strings'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 min
    },
  },
})

export function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
