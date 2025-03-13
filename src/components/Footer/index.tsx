import { getTranslations } from 'next-intl/server'
import { FooterColumn, FooterColumnItem } from './FooterColumn'
import { FooterCopyWrite } from './FooterCopyWrite'
import { FooterIntro } from './FooterIntro'
import { getHeaderItems } from '@/components/Header'

export const Footer = async () => {
  const headerItems = await getHeaderItems()
  const t = await getTranslations()

  const IMPORTANT_lINKS: FooterColumnItem[] = [
    {
      title: t('privacyPolicy'),
      route: '#',
    },
    {
      title: t('faqs'),
      route: '#',
    },
    {
      title: t('termsOfService'),
      route: '#',
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="w-full md:h-[430px] bg-secondary-500 grid md:grid-cols-5 gap-12 text-secondary-contrast px-8 md:px-20 lg:px-30 py-24">
        <div className="col-span-2">
          <FooterIntro />
        </div>
        <div className="col-span-1">
          <FooterColumn
            title={t('company').toTitleCase()}
            items={headerItems}
          />
        </div>

        <div className="col-span-2">
          <FooterColumn
            title={t('importantLinks').toTitleCase()}
            items={IMPORTANT_lINKS}
          />
        </div>
      </div>

      <FooterCopyWrite />
    </div>
  )
}
