import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import '@/utils/strings'
// import GlobalStyles from '@/styles/GlobalStyles'
import { Footer, Header } from '@/components'
import HeaderBanner from '@/components/Header/HeaderBanner'
import { getHeaderItems } from '@/components/Header'
import { QueryProvider } from '@/context/query-provider'
import '@/styles/tailwind.css'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()

  return {
    title: t('bookNerd').toTitleCase(),
    description: '',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  const t = await getTranslations()
  const headerItems = await getHeaderItems()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col max-w-[3000px] h-full m-auto">
            {/* <GlobalStyles /> */}

            <Header items={headerItems}>
              <HeaderBanner
                title={t('headerTitle')}
                description={t('headerDescription')}
              />
            </Header>
            <div className="flex flex-col grow bg-bnLightBlue-50">
              <QueryProvider>{children}</QueryProvider>
            </div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
