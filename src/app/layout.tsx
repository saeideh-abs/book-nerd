import { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import '@/styles/tailwind.css'
import { Header, HeaderItemsType } from '@/components'

export const metadata: Metadata = {
  title: 'Twin',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerItems: HeaderItemsType = [
    { title: 'Home', route: '/' },
    { title: 'About Us', route: '/about-us' },
    { title: 'Contact Us', route: '/contact-us' },
  ]

  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <Header items={headerItems} />
        <div className="flex flex-col">{children}</div>
      </body>
    </html>
  )
}
