import { HEADER_ITEMS } from '@/utils/constants'
import { FooterColumn, FooterColumnItem } from './FooterColumn'
import { FooterCopyWrite } from './FooterCopyWrite'
import { FooterIntro } from './FooterIntro'

const IMPORTANT_lINKS: FooterColumnItem[] = [
  {
    title: 'Privacy policy',
    route: '#',
  },
  {
    title: 'Faqs',
    route: '#',
  },
  {
    title: 'Terms of Service',
    route: '#',
  },
]

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full md:h-[430px] bg-secondary-500 grid md:grid-cols-5 gap-12 text-secondary-contrast px-8 md:px-20 lg:px-30 py-24">
        <div className="col-span-2">
          <FooterIntro />
        </div>
        <div className="col-span-1">
          <FooterColumn title="Company" items={HEADER_ITEMS} />
        </div>

        <div className="col-span-2">
          <FooterColumn title="Important Links" items={IMPORTANT_lINKS} />
        </div>
      </div>

      <FooterCopyWrite />
    </div>
  )
}
