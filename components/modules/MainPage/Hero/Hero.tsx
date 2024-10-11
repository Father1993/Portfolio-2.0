/* eslint-disable max-len */
'use client'

import { useLang } from '@/hooks/useLang'

const Hero = () => {
  const { lang, translations } = useLang()

  return (
    <article className='hero'>
      <div className='container hero__container padding__container'>
        <h1 className='hero__title'>{translations[lang].hero.hello}</h1>
        <h2 className='hero__name'>{translations[lang].hero.name}й</h2>
        <div className='typing-text'>
          <span className='hero__descr' id='element' />
        </div>
        <p className='hero__about'>{translations[lang].hero.text}</p>
      </div>
    </article>
  )
}

export default Hero
