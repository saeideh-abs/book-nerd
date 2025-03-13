import { getTranslations } from 'next-intl/server'

export const FooterCopyWrite = async () => {
  const t = await getTranslations()

  return (
    <p className="w-full h-10 text-xs font-thin leading-10 text-center bg-primary-500 text-primary-contrast">
      {t('copyrightDescription')}
    </p>
  )
}
