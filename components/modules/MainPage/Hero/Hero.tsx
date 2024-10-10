/* eslint-disable max-len */
'use client'

const Hero = () => (
  <article className='hero'>
    <div className='container hero__container padding__container'>
      <h1 className='hero__title'>Привет, меня зовут</h1>
      <h2 className='hero__name'>Андрей Спиней</h2>
      <div className='typing-text'>
        <span className='hero__descr' id='element' />
      </div>
      <p className='hero__about'>
        Я web разработчик, специализируюсь на создании цифровых технологий. В
        настоящее время я сосредоточен на создании доступных, ориентированных на
        человека решений и продуктов.
      </p>
    </div>
  </article>
)

export default Hero
