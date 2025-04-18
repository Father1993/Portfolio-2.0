/* eslint-disable @next/next/no-img-element */
/* eslint-disable indent */
/* eslint-disable max-len */
'use client'
import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/hooks/useLang'
import { setLang } from '@/context/lang'
import { AllowedLangs } from '@/constants/lang'
import Navigation from './Navigation'
import HeaderLogo from '@/components/elements/HeaderLogo/HeaderLogo'
import LanguageButton from '@/components/elements/LanguageButton/LanguageButton'
import { basePropsForMotion } from '@/constants/motion'

const Header = () => {
  const { lang, translations } = useLang()

  const handleSwitchLang = useCallback((newLang: AllowedLangs) => {
    setLang(newLang)
    localStorage.setItem('lang', JSON.stringify(newLang))
  }, [])

  return (
    <motion.header {...basePropsForMotion} className='p-3 text-white'>
      <div className='container mx-auto'>
        <div className='header flex flex-wrap items-center justify-center md:justify-between'>
          <div className='flex items-center flex-col md:flex-row'>
            <HeaderLogo />

            <div className='header__button-wrapper ml-4'>
              <LanguageButton
                lang={AllowedLangs.RU}
                currentLang={lang}
                onClick={() => handleSwitchLang(AllowedLangs.RU)}
                label='Русский язык'
                className='rus'
              />
              <LanguageButton
                lang={AllowedLangs.EN}
                currentLang={lang}
                onClick={() => handleSwitchLang(AllowedLangs.EN)}
                label='English'
              />
            </div>
          </div>

          <Navigation lang={lang} translations={translations} />
        </div>
      </div>
    </motion.header>
  )
}

export default Header
