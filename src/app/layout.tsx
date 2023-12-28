import { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import '@/styles/tailwind.css'
import { Header, HeaderItemsType } from '@/components'
import HeaderBanner from '@/components/Header/HeaderBanner'

export const metadata: Metadata = {
  title: 'Book Nerd',
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
        <div className="max-w-[2500px] h-screen m-auto bg-[#f0f8ff96]">
          <GlobalStyles />
          <Header items={headerItems}>
            <HeaderBanner
              title="ipsum dolor si"
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed eu feugiat amet, libero ipsum enim pharetra hac. 
            Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.`}
            />
          </Header>
          <div className="flex flex-col">{children}</div>
        </div>
      </body>
    </html>
  )
}
