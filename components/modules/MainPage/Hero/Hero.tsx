/* eslint-disable max-len */
'use client'
import { useLang } from '@/hooks/useLang'
import { useTyped } from '@/hooks/useTyped'

const Hero = () => {
  const { lang, translations } = useLang()
  // Печать текста из перевод
  const typedEl = useTyped([
    translations[lang].hero.create_site,
    translations[lang].hero.site_dev,
  ])

  return (
    <article className='hero'>
      <div className='container hero__container padding__container padding__left'>
        <h1 className='hero__title'>{translations[lang].hero.hello}</h1>
        <h2 className='hero__name'>{translations[lang].hero.name}</h2>
        <div className='typing-text'>
          <span className='hero__descr' ref={typedEl} />
        </div>
        <p className='hero__about'>{translations[lang].hero.text}</p>
      </div>
    </article>
  )
}

export default Hero
