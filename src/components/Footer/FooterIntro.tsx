import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export const FooterIntro = async () => {
  const t = await getTranslations()

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Image
          src="/images/logo/logo-white.png"
          alt=""
          width="83"
          height="87"
        />
        <p className="text-white">{t('footerDescription')}</p>
      </div>
      <Social />
    </div>
  )
}

export const Social = async () => {
  const t = await getTranslations('social')
  const w = 44

  return (
    <div className="flex justify-between gap-2">
      <Image
        src="/images/social-logo/facebook.png"
        alt={t('facebookLogo')}
        width={w}
        height={w}
      />
      <Image
        src="/images/social-logo/linkedin.png"
        alt={t('linkedinLogo')}
        width={w}
        height={w}
      />
      <Image
        src="/images/social-logo/twitter.png"
        alt={t('twitterLogo')}
        width={w}
        height={w}
      />
      <Image
        src="/images/social-logo/youtube.png"
        alt={t('youtubeLogo')}
        width={w}
        height={w}
      />
    </div>
  )
}
