import Image from 'next/image'

export const FooterIntro = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Image
          src="/images/logo/logo-white.png"
          alt=""
          width="83"
          height="87"
        />
        <p className="text-white">
          Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <Social />
    </div>
  )
}

export const Social = () => {
  const w = 44

  return (
    <div className="flex justify-between gap-2">
      <Image
        src="/images/social-logo/facebook.png"
        alt="facebook logo"
        width={w}
        height={w}
      />
      <Image
        src="/images/social-logo/linkedin.png"
        alt="linkedin logo"
        width={w}
        height={w}
      />
      <Image
        src="/images/social-logo/twitter.png"
        alt="twitter logo"
        width={w}
        height={w}
      />
      <Image
        src="/images/social-logo/youtube.png"
        alt="youtube logo"
        width={w}
        height={w}
      />
    </div>
  )
}
