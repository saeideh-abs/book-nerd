import { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import '@/styles/tailwind.css'
import { Footer, Header } from '@/components'
import HeaderBanner from '@/components/Header/HeaderBanner'
import { HEADER_ITEMS } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Book Nerd',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col max-w-[3000px] h-full m-auto">
          <GlobalStyles />
          <Header items={HEADER_ITEMS}>
            <HeaderBanner
              title="ipsum dolor si"
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu feugiat amet, libero ipsum enim pharetra hac. 
                Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.`}
            />
          </Header>
          <div className="flex flex-col grow bg-bnLightBlue-50">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
