/* eslint-disable max-len */
'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/hooks/useLang'
import { useTyped } from '@/hooks/useTyped'
import { basePropsForMotion } from '@/constants/motion'

const Hero = () => {
  const { lang, translations } = useLang()
  // Печать текста из перевод
  const typedEl = useTyped([
    translations[lang].hero.create_site,
    translations[lang].hero.site_dev,
  ])

  return (
    <motion.article {...basePropsForMotion} className='hero'>
      <div className='container hero__container padding__container'>
        <h1 className='hero__title'>{translations[lang].hero.hello}</h1>
        <h2 className='hero__name'>{translations[lang].hero.name}</h2>
        <div className='typing-text'>
          <span className='hero__descr' ref={typedEl} />
        </div>
        <p className='hero__about'>{translations[lang].hero.text}</p>
      </div>
    </motion.article>
  )
}

export default Hero
