import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BookDetails from '../[bookId]/page'
import { useBook } from '@/services/hooks/useBook'
import { useBookGenre } from '@/services/hooks/useBookGenre'

declare global {
  interface String {
    toTitleCase(): string
  }
}

String.prototype.toTitleCase = function () {
  return this.toString()
}

// Mock the hooks
jest.mock('@/services/hooks/useBook')
jest.mock('@/services/hooks/useBookGenre')
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createClientComponentClient: () => ({
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn().mockResolvedValue({ data: {}, error: null }),
    // Add any other Supabase client methods you use in your component
  }),
}))

describe('BookDetails', () => {
  const mockBookData = {
    id: '1',
    title: 'Test Book',
    author: [{ name: 'Test Author', main: true, role: null }],
    pages: 200,
    bookFormat: 'Paperback',
    description: 'Test description',
  }

  const mockGenreData = [
    { id: '1', name: 'fiction' },
    { id: '2', name: 'adventure' },
  ]

  beforeEach(() => {
    // Setup default mock returns
    ;(useBook as jest.Mock).mockReturnValue({
      data: mockBookData,
      error: null,
    })
    ;(useBookGenre as jest.Mock).mockReturnValue({
      data: mockGenreData,
      error: null,
    })
  })

  it('renders book details information correctly', () => {
    render(<BookDetails params={{ bookId: '1' }} />)
    expect(screen.getAllByText('Test Book')).toHaveLength(2)
    expect(screen.getAllByText('Test Author')).toHaveLength(2)
    expect(screen.getByText('200 pages, Paperback')).toBeInTheDocument()
    expect(screen.getByText('fiction')).toBeInTheDocument()
    expect(screen.getByText('adventure')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('renders BookDetails page correctly', () => {
    const { container } = render(<BookDetails params={{ bookId: '1' }} />)
    expect(container).toMatchSnapshot()
  })
})
