/* eslint-disable max-len */
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const Footer = () => {
  const { lang, translations } = useLang()
  const isMedia768 = useMediaQuery(768)

  return (
    <footer>
      <div className='footer__contacts-lg justify-center items-center'>
        <ul className='footer__nav-lg flex'>
          <li className='ms-3'>
            <a target='_blank' href='https://t.me/Anri_khv'>
              <img
                decoding='async'
                className='footer__links-hover-md'
                src='/img/social/telegram.svg'
                alt='telegram_social_icon'
              />
            </a>
          </li>
          <li className='ms-3'>
            <a target='_blank' href='https://wa.me/79098763797'>
              <img
                className='footer__links-hover-md'
                decoding='async'
                src='/img/social/whatsapp.svg'
                alt='whatsapp_social_icon'
              />
            </a>
          </li>
          <li className='ms-3'>
            <a target='_blank' href='https://github.com/Father1993'>
              <img
                className='footer__links-hover-md'
                decoding='async'
                src='/img/social/github.svg'
                alt='github_social_icon'
              />
            </a>
          </li>
          <li className='ms-3'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/andrey-spiney/'
            >
              <img
                className='footer__links-hover-md-last'
                decoding='async'
                src='/img/social/linkedin.svg'
                alt='linkedin_social_icon'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__wrapper'>
        <span className='mb-3 md:mb-0 text-gray-500 text-center footer__text'>
          {translations[lang].footer.copyright}
        </span>
      </div>
      {!isMedia768 && (
        <>
          <div className='footer__contacts'>
            <ul className='footer__nav d-flex flex-column'>
              <li className='ms-3'>
                <a target='_blank' href='https://t.me/Anri_khv'>
                  <img
                    className='footer__links-hover'
                    decoding='async'
                    src='/img/social/telegram.svg'
                    alt='telegram_social_icon'
                  />
                </a>
              </li>
              <li className='ms-3'>
                <a target='_blank' href='https://wa.me/79098763797'>
                  <img
                    className='footer__links-hover'
                    decoding='async'
                    src='/img/social/whatsapp.svg'
                    alt='whatsapp_social_icon'
                  />
                </a>
              </li>
              <li className='ms-3'>
                <a target='_blank' href='https://github.com/Father1993'>
                  <img
                    className='footer__links-hover'
                    decoding='async'
                    src='/img/social/github.svg'
                    alt='github_social_icon'
                  />
                </a>
              </li>
              <li className='ms-3'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/andrey-spiney/'
                >
                  <img
                    className='footer__links-hover-last'
                    decoding='async'
                    src='/img/social/linkedin.svg'
                    alt='linkedin_social_icon'
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__email'>
            <a className='footer__link' href='mailto:enjoyhillol@gmail.com'>
              <p>enjoyhillol@gmail.com</p>
            </a>
          </div>
        </>
      )}
    </footer>
  )
}

export default Footer
