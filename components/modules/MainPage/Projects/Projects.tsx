/* eslint-disable @next/next/no-img-element */
import { useLang } from '@/hooks/useLang'

const Projects = () => {
  const { lang, translations } = useLang()

  return (
    <section className='jobs' id='project'>
      <div className='container padding__container wrapper-margin scroll-animation-left'>
        <h2 className='jobs__title margin__text'>
          {translations[lang].projects.title}
        </h2>
        <div className='project-container'>
          <div className='project-first-line'>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/tigai_preview.jpg'
                alt='todo-app-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {translations[lang].projects.react_web_app}
                </h5>
                <p className='card-text special-text'>
                  {translations[lang].projects.react_web_app_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-preview d-flex'
                  href='https://tigay.ru/'
                  target='_blank'
                >
                  Live Preview
                </a>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/Aleksey-Tigay-website'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/store_app.jpg'
                alt='todo-app-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {translations[lang].projects.i_shop}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.i_shop_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-preview d-flex'
                  href='https://main--somestorespinej.netlify.app/'
                  target='_blank'
                >
                  Live Preview
                </a>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/Online-jewelry-store-via-API'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/xinros_preview.jpeg'
                alt='xinroshh-site-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {' '}
                  {translations[lang].projects.xinrosh}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.xinrosh_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-preview d-flex'
                  href='#'
                  target='_blank'
                >
                  Live Preview
                </a>
                <a
                  className='card-link project__link-code d-flex'
                  href='#'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className='project-second-line d-none'>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/lib_app.jpg'
                alt='lib_app-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {' '}
                  {translations[lang].projects.book_lib}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.book_lib_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/Books-Library-App'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/es-dv_preview.jpg'
                alt='es-dv_site-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {' '}
                  {translations[lang].projects.electrosystems}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.electrosystems_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-preview d-flex'
                  href='https://es-dv.ru'
                  target='_blank'
                >
                  Live Preview
                </a>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/es-dv'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/plumber_preview.jpg'
                alt='todo-app-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {translations[lang].projects.plumber}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.plumber_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-preview d-flex'
                  href='https://plumkhv.netlify.app/'
                  target='_blank'
                >
                  Live Preview
                </a>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/Plumber-regional-site'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className='project-third-line d-none'>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/perevozka27_preview.jpg'
                alt='wordpress-sites'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {' '}
                  {translations[lang].projects.wordpress_sites}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.wordpress_sites_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-preview spec-links d-flex'
                  href='https://perevozka27.ru/'
                  target='_blank'
                >
                  perevozka27.ru
                </a>
                <a
                  className='card-link project__link-preview spec-links d-flex'
                  href='https://xn--90anbgibdchfetk.xn--p1ai/'
                  target='_blank'
                >
                  помнимскорбим.рф
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/students-form_preview.jpg'
                alt='memories-game'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {translations[lang].projects.students_app}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.students_app_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/Vanila-JS-Forms-Filter-Render'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/react_app_preview.jpg'
                alt='React-app-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {' '}
                  {translations[lang].projects.react_app_old}{' '}
                </h5>
                <p className='card-text special-text'>
                  {translations[lang].projects.react_app_old_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/React_app_practice/tree/master'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className='project-fourth-line d-none'>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/time_app_nodejs_preview.jpg'
                alt='docker-app-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {translations[lang].projects.docker_in_project}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.docker_in_project_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/Docker-full-practice'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/vanilla_js_preview.jpg'
                alt='memories-game-preview'
              />
              <div className='card__wrapper last-card'>
                <h5 className='card-title'>
                  {translations[lang].projects.vanilla_js}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.vanilla_js_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-preview d-flex'
                  href='https://65c60a3cd060d29373d059d2--fascinating-quokka-0f8f87.netlify.app/'
                  target='_blank'
                >
                  Live Preview
                </a>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/MemoryGameJS/tree/main'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
            <div className='card-body'>
              <img
                decoding='async'
                className='project__img'
                src='/img/project/calc_preview.jpg'
                alt='calculate-app-preview'
              />
              <div className='card__wrapper'>
                <h5 className='card-title'>
                  {translations[lang].projects.calculate_webapp}
                </h5>
                <p className='card-text'>
                  {translations[lang].projects.calculate_webapp_descr}
                </p>
              </div>
              <div className='project__link'>
                <a
                  className='card-link project__link-code d-flex'
                  href='https://github.com/Father1993/Foreign-car-buying-calculator'
                  target='_blank'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button id='showMoreBtn' className='show-more-btn'>
            {translations[lang].common.show_more}
          </button>
        </div>
      </div>
      <div className='jobs__github text-center'>
        <a
          className='jobs__btn btn btn-success jobs__link'
          href='https://github.com/Father1993'
          target='_blank'
        >
          {translations[lang].common.more_projects_in_gitHub}
        </a>
      </div>
    </section>
  )
}

export default Projects
