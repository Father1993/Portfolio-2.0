'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const HeaderLogo = () => {
  const isMedia768 = useMediaQuery(768)

  return (
    <Link href='/' className='block'>
      <Image
        src={
          isMedia768
            ? '/img/assets/logo-website__orange.webp'
            : '/img/assets/logo-website.webp'
        }
        alt='Spinej-website-logo'
        width={170}
        height={50}
        className='header__logo'
      />
    </Link>
  )
}

export default HeaderLogo
