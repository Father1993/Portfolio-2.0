/* eslint-disable indent */
/* eslint-disable max-len */
'use client'

import { useLang } from '@/hooks/useLang'

const Header = () => {
  const { lang, translations } = useLang()

  return (
    <header className='container header__container'>
      <div>{translations[lang].header.all_link}</div>
    </header>
  )
}

export default Header
