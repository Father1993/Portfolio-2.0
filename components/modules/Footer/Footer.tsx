/* eslint-disable max-len */
import { useLang } from '@/hooks/useLang'

const Footer = () => {
  const { lang, translations } = useLang()

  return (
    <footer>
      <div>
        <ul>
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
      <div className='footer__wrapper col-md-4 d-flex align-items-center mx-auto scroll-animation-right'>
        <span className='mb-3 mb-md-0 text-muted footer__text text-center'>
          {translations[lang].footer.copyright}
        </span>
      </div>
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
      <div>
        <a href='mailto:enjoyhillol@gmail.com'>
          <p>enjoyhillol@gmail.com</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
