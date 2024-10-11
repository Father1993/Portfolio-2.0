/* eslint-disable @next/next/no-img-element */
/* eslint-disable indent */
/* eslint-disable max-len */
'use client'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { setLang } from '@/context/lang'
import { AllowedLangs } from '@/constants/lang'

const Header = () => {
  const { lang, translations } = useLang()

  const handleSwitchLang = (newLang: AllowedLangs) => {
    setLang(newLang)
    localStorage.setItem('lang', JSON.stringify(newLang))
  }

  return (
    <header className='p-3 text-white'>
      <div className='container mx-auto'>
        <div className='header flex flex-wrap items-center justify-between lg:justify-start'>
          <Link href='index.html'>
            <img
              decoding='async'
              src='/img/assets/logo-website.webp'
              alt='Spinej-logo'
              className='header__logo'
            />
          </Link>
          <Link
            href='index.html'
            className='p-0 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >
            <img
              decoding='async'
              src='/img/assets/logo-website__orange.webp'
              alt='logo-orange'
              className='header__logo header__logo-orange'
            />
          </Link>
          <div className='header__button-wrapper col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <button
              className={`header__btn rus btn btn-outline-light ${lang === AllowedLangs.RU ? 'lang-active' : ''}`}
              onClick={() => handleSwitchLang(AllowedLangs.RU)}
              style={{
                backgroundColor:
                  lang === AllowedLangs.RU ? '#00c26a' : 'transparent',
              }}
            >
              RU
            </button>
            <button
              className={`header__btn eng btn btn-outline-light ${lang === AllowedLangs.EN ? 'lang-active' : ''}`}
              onClick={() => handleSwitchLang(AllowedLangs.EN)}
              style={{
                backgroundColor:
                  lang === AllowedLangs.EN ? '#00c26a' : 'transparent',
              }}
            >
              EN
            </button>
          </div>
          <ul className='nav text-end'>
            <li>
              <Link
                href='#about-me'
                className='header__nav-link nav-link px-2 text-secondary'
              >
                {translations[lang].header.about}
              </Link>
            </li>
            <li>
              <Link
                href='#skills'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.skills}
              </Link>
            </li>
            <li>
              <Link
                href='#project'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.projects}
              </Link>
            </li>
            <li>
              <Link
                href='#experience'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.experience}
              </Link>
            </li>
            <li>
              <Link
                href='#contact'
                className='header__nav-link nav-link px-2 text-white'
              >
                {translations[lang].header.contacts}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
