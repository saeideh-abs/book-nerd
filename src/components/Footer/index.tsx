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
      <div className="w-full md:h-[430px] bg-secondary-500 grid md:grid-cols-5 gap-20 text-secondary-contrast px-28 lg:px-36 py-24">
        <div className="col-span-2">
          <FooterIntro />
        </div>
        <div>
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
