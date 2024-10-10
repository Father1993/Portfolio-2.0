/* eslint-disable @next/next/no-img-element */

const Projects = () => (
  <section className='jobs' id='project'>
    <div className='container padding__container wrapper-margin scroll-animation-left'>
      <h2 className='jobs__title margin__text'>Проекты</h2>
      <div className='project-container'>
        <div className='project-first-line'>
          <div className='card-body'>
            <img
              decoding='async'
              className='project__img'
              src='./img/project/tigai_preview.webp'
              alt='todo-app-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>React Web App - Тренер по фитнесу</h5>
              <p className='card-text special-text'>
                Это адаптивное веб-приложение. Все компоненты переиспользуемые.
                В проекте используется framer-motion, библиотека для создания
                анимаций в React. Для реализации плавного скроллинга по странице
                используется react-scroll. Функционал отправки заявок реализован
                с помощью emailjs. React-helmet для SEO оптимизации.
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
              src='./img/project/store_app.webp'
              alt='todo-app-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>Интернет-магазин на React</h5>
              <p className='card-text'>
                Включает различные функции, отображение списка товаров,
                фильтрация товаров по бренду, цене и названию, постраничная
                навигация и кнопка для прокрутки страницы вверх. Данные
                загружается и фильтруются через запросы к API.
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
              src='./img/project/xinros_preview.webp'
              alt='xinroshh-site-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>Xinrosh</h5>
              <p className='card-text'>
                Landing page для китайской компании по параллельному импорту
                запчастей и спецтехники в РФ. HTML/CSS/JS/Bootstrap
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
              src='./img/project/lib_app.webp'
              alt='lib_app-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>Books Library App</h5>
              <p className='card-text'>
                Веб-приложение на React, которое позволяет пользователям
                управлять своей библиотекой. В проекте есть API с использованием
                Express
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
              src='./img/project/es-dv_preview.webp'
              alt='es-dv_site-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>Электросистемы</h5>
              <p className='card-text'>
                Современный сайт-визитка на PHP. Адаптивный дизайн,
                SEO-оптимизация.
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
              src='./img/project/plumber_preview.webp'
              alt='todo-app-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>
                Landing page - Сантехнические работы
              </h5>
              <p className='card-text'>
                Веб-сайт компании, предоставляющей услуги по&nbsp;сантехнике.
                Сайт разработан с&nbsp;использованием HTML, CSS,
                JS&nbsp;и&nbsp;Bootstrap.
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
              src='./img/project/perevozka27_preview.webp'
              alt='wordpress-sites'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>WordPress</h5>
              <p className='card-text'>
                Есть несколько сайтов написанных на WordPress в продакшене.
                <br />
                Простые landing page для местных фирм. Сделаны на WordPress
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
              src='./img/project/students-form_preview.webp'
              alt='memories-game'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>
                Приложение для управления данными студентов
              </h5>
              <p className='card-text'>
                Практика создания простого сервера на&nbsp;HTTP,
                с&nbsp;обработкой GET, POST запросов. Также практика с&nbsp;npm,
                Express, dotenv и&nbsp;стандартными модулями Node.JS: path,
                http, fs, event.
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
              src='./img/project/react_app_preview.webp'
              alt='React-app-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>React app</h5>
              <p className='card-text special-text'>
                API-запросы к&nbsp;серверу для получения списка постов. Есть
                личный кабинет, кастомные хуки для улучшения функциональности,
                и&nbsp;форму для создания постов. Имеет функцию фильтрации
                и&nbsp;сортировки постов, а&nbsp;также постраничную пагинацию.
                Реализована функция бесконечного скролла, сделанная через
                невидимый блок, который позволяет подгружать данные частично
                через API. Приложение обеспечивает анимацию загрузки при запросе
                на&nbsp;сервер, делая ожидание более приятным. Каждый пост можно
                открыть или удалить отдельно.
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
              src='./img/project/time_app_nodejs_preview.webp'
              alt='docker-app-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>
                Docker в проекте с API-сервером на NodeJS + Express
              </h5>
              <p className='card-text'>
                Приложение Time состоит из&nbsp;фронтенд- и&nbsp;бэкенд-частей.
                Фронтенд написан с&nbsp;помощью фреймворка Vue.js. Бэкэнд
                написан с&nbsp;использованием Node.js и&nbsp;Express. База
                данных&nbsp;&mdash; MySQL
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
              src='./img/project/vanilla_js_preview.webp'
              alt='memories-game-preview'
            />
            <div className='card__wrapper last-card'>
              <h5 className='card-title'>Vanilla JS game</h5>
              <p className='card-text'>
                Написана на нативном JavaScript. setTimeout, анимация на СSS.
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
              src='./img/project/calc_preview.webp'
              alt='calculate-app-preview'
            />
            <div className='card__wrapper'>
              <h5 className='card-title'>
                Калькулятор расчета стоимости авто под заказ
              </h5>
              <p className='card-text'>
                Калькулятор может посчитать как автомобили из&nbsp;Японии, так
                и&nbsp;автомобили с&nbsp;Южной Кореи. А&nbsp;так-же может
                высчитать вашу ставку в&nbsp;йенах, исходя из&nbsp;вашего
                бюджета (для самостоятельной покупки авто с&nbsp;аукционов
                Японии)
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
          Показать еще
        </button>
      </div>
    </div>
    <div className='jobs__github text-center'>
      <a
        className='jobs__btn btn btn-success jobs__link'
        href='https://github.com/Father1993'
        target='_blank'
      >
        Больше проектов на GitHub
      </a>
    </div>
  </section>
)

export default Projects
