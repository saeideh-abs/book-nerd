import { renderHook, waitFor } from '@testing-library/react'
import { useBook } from '@/services/hooks/useBook'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BaseBookBoxItem } from '@/models/BaseBookBoxItem'
import { bookSample } from './__mocks__'
import { fetchBookByIdQuery } from '@/services/book'

jest.mock('@/services/book')
jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createClientComponentClient: () => ({
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn().mockResolvedValue({}),
  }),
}))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console for tests
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
})

const wrapper = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useBook hook', () => {
  beforeEach(() => {
    // Clear query cache before each test
    queryClient.clear()
  })

  it('fetches and returns book data successfully', async () => {
    ;(fetchBookByIdQuery as jest.Mock).mockResolvedValue({
      data: bookSample,
      error: null,
    })

    const { result } = renderHook(() => useBook('1'), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toEqual(new BaseBookBoxItem(bookSample))
  })

  it('should throw an error when fetch fails', async () => {
    const error = new Error('Failed to fetch')

    ;(fetchBookByIdQuery as jest.Mock).mockResolvedValue({ data: null, error })

    const { result } = renderHook(() => useBook('1'), { wrapper })

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toEqual(error)
  })

  it('should not fetch data when bookId is not provided', async () => {
    const { result } = renderHook(() => useBook(''), { wrapper })

    expect(result.current.isFetching).toBe(false)
    expect(result.current.data).toBeUndefined()
    expect(result.current.error).toBeNull()
  })
})
