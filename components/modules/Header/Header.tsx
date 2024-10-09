/* eslint-disable @next/next/no-img-element */
/* eslint-disable indent */
/* eslint-disable max-len */
'use client'

import { useLang } from '@/hooks/useLang'

const Header = () => {
  const { lang, translations } = useLang()

  return (
    <header className='p-3 text-white'>
      <div className='container'>
        <div className='header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a
            href='index.html'
            className='p-0 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >
            <img
              decoding='async'
              src='./img/assets/logo-website.webp'
              alt='logo-green'
              className='header__logo'
            />
          </a>
          <a
            href='index.html'
            className='p-0 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >
            <img
              decoding='async'
              src='./img/assets/logo-website__orange.webp'
              alt='logo-orange'
              className='header__logo header__logo-orange'
            />
          </a>
          <div className='header__button-wrapper col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <div className='header__lang-wrapper'>
              <a
                className='header__btn rus btn btn-outline-light'
                style={{ backgroundColor: '#00c26a' }}
                href='./index.html'
              >
                RU
              </a>
              <a
                className='header__btn eng btn btn-outline-light'
                href='./index_en.html'
              >
                EN
              </a>
            </div>
          </div>
          <ul className='nav text-end'>
            <li>
              <a
                href='#about-me'
                className='header__nav-link nav-link px-2 text-secondary'
              >
                {translations[lang].header.about}
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.skills}
              </a>
            </li>
            <li>
              <a
                href='#project'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.projects}
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.experience}
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.contacts}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
