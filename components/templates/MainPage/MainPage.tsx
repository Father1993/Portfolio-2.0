/* eslint-disable @next/next/no-img-element */
'use client'

const MainPage = () => (
  <main>
    {/* <article className='hero'>
      <div className='container hero__container padding__container'>
        <h1 className='hero__title'>Привет, меня зовут</h1>
        <h2 className='hero__name'>Андрей Спиней</h2>
        <div className='typing-text'>
          <span className='hero__descr' id='element' />
        </div>
        <p className='hero__about'>
          Я web разработчик, специализируюсь на создании цифровых технологий. В
          настоящее время я сосредоточен на создании доступных, ориентированных
          на человека решений и продуктов.
        </p>
      </div>
    </article>
    <section className='about'>
      <div className='about__wrapper container padding__container'>
        <div className='about__title scroll-animation-left'>
          <h2 className='about__us margin__text'>Обо мне</h2>
          <div className='about__container'>
            <div className='about__block' id='about-me'>
              <div className='block__info'>
                <p>
                  Мне нравится создавать вещи, которые живут в&nbsp;интернете.
                  Мой интерес к&nbsp;веб-разработке начался еще
                  в&nbsp;2020&nbsp;году, когда я&nbsp;решил попробовать создать
                  сайт. И&nbsp;оказывается, создание даже пользовательской
                  кнопки научило меня многому!
                </p>
                <p>
                  Перенесемся в&nbsp;сегодняшний день: мне посчастливилось
                  работать в&nbsp;рекламном агентстве, небольшой компании
                  по&nbsp;продаже товаров со&nbsp;своим сайтом где я&nbsp;был
                  Frontend разработчиком. Решал бизнес задачи путем разработки
                  новых фичей. Продолжительное время работал fullstack
                  разработчиком на PHP. Успешно разработал и&nbsp;запустил
                  интернет-магазин, интегрировав нужный функционал под бизнес
                  задачи.
                </p>
                <p>
                  Много времени я&nbsp;занимался продвижением сайтов
                  в&nbsp;сети, знаю семантическую верстку, знаком
                  с&nbsp;техническим SEO. Знаю как настроить и&nbsp;опубликовать
                  проект на&nbsp;сервере. И настроить рекламные каналы.
                </p>
                <p>
                  В свободное время продолжаю изучать новые технологии которые
                  будут полезны мне в&nbsp;работе, пишу свои pet-проекты. Сейчас
                  изучаю React(NextJS), Node.js, TypeScript. Хочу развиваться в
                  направлении Full Stack.
                </p>
                <p>
                  Вот несколько технологий, с&nbsp;которыми я&nbsp;работал
                  в&nbsp;последнее время:
                </p>
              </div>
              <div className='about__skills-wrapper'>
                <ul className='about__skills'>
                  <li className='about__list'>JS</li>
                  <li className='about__list'>NextJS</li>
                  <li className='about__list'>NodeJS</li>
                  <li className='about__list'>PHP</li>
                  <li className='about__list'>Bitrix Framework</li>
                  <li className='about__list'>Git</li>
                </ul>
              </div>
            </div>
            <div className='about__photo'>
              <img
                decoding='async'
                className='photo__card'
                src='./assets/img/my-1280.webp'
                srcSet='
                                            ./img/assets/my-480.webp   480w,
                                            ./img/assets/my-768.webp   768w,
                                            ./img/assets/my-1280.webp 1280w
                                        '
                sizes='(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px'
                alt='Andrej Spinej'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='skills' id='skills'>
      <div className='skills__wrapper container scroll-animation-right'>
        <div className='row'>
          <h2 className='skills__title margin__text'>Skills</h2>
          <h3 className='skills__description'>
            Навыки, инструменты и технологии, в которых я разбираюсь:
          </h3>
          <div className='skills__block'>
            <ul className='skills__list'>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/js.webp'
                  alt='JS_icon'
                />
                JavaScript
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/react.webp'
                  alt='React_icon'
                />
                React
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/node.webp'
                  alt='Node_icon'
                />
                Node.js
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/docker.webp'
                  alt='Docker_icon'
                />
                Docker
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/html.webp'
                  alt='HTML_icon'
                />
                HTML
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/css.webp'
                  alt='CSS_icon'
                />
                CSS
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/php.webp'
                  alt='PHP_icon'
                />
                PHP
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/python.webp'
                  alt='Python_icon'
                />
                Python
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/redux.webp'
                  alt='Redux_icon'
                />
                Redux
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/sql.webp'
                  alt='SQL_icon'
                />
                SQL
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/bootstap.webp'
                  alt='Bootstrap_icon'
                />
                Bootstrap
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/wordpress.webp'
                  alt='WordPress_icon'
                />
                WordPress
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/git.webp'
                  alt='Git_icon'
                />
                Git
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/npm.webp'
                  alt='NPM_icon'
                />
                npm
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/bash.webp'
                  alt='Bash_icon'
                />
                bash
              </li>
              <li>
                <img
                  decoding='async'
                  className='skills__icon'
                  src='./img/tech/linux.webp'
                  alt='Linux_icon'
                />
                Linux
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
                <h5 className='card-title'>
                  React Web App - Тренер по фитнесу
                </h5>
                <p className='card-text special-text'>
                  Это адаптивное веб-приложение. Все компоненты
                  переиспользуемые. В проекте используется framer-motion,
                  библиотека для создания анимаций в React. Для реализации
                  плавного скроллинга по странице используется react-scroll.
                  Функционал отправки заявок реализован с помощью emailjs.
                  React-helmet для SEO оптимизации.
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
                  управлять своей библиотекой. В проекте есть API с
                  использованием Express
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
                  с&nbsp;обработкой GET, POST запросов. Также практика
                  с&nbsp;npm, Express, dotenv и&nbsp;стандартными модулями
                  Node.JS: path, http, fs, event.
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
                  через API. Приложение обеспечивает анимацию загрузки при
                  запросе на&nbsp;сервер, делая ожидание более приятным. Каждый
                  пост можно открыть или удалить отдельно.
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
                  Приложение Time состоит из&nbsp;фронтенд-
                  и&nbsp;бэкенд-частей. Фронтенд написан с&nbsp;помощью
                  фреймворка Vue.js. Бэкэнд написан с&nbsp;использованием
                  Node.js и&nbsp;Express. База данных&nbsp;&mdash; MySQL
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
    <section className='work' id='experience'>
      <div className='container padding__container wrapper-margin scroll-animation-right'>
        <h2 className='work__title margin__text'>Опыт работы</h2>
        <div className='work__desc'>
          <h4>Краткая информация из моего крайнего опыта</h4>
        </div>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingZero'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseZero'
                aria-expanded='true'
                aria-controls='collapseZero'
              >
                <strong>FullStack-разработчик на PHP @ Электросистемы</strong>
              </button>
            </h2>
            <div
              id='collapseZero'
              className='accordion-collapse collapse show'
              aria-labelledby='headingZero'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  &bull; Разрабатывал и&nbsp;кастоматизировал компоненты
                  и&nbsp;модули, адаптируя их под бизнес-задачи, используя
                  объектно-ориентированный подход.
                  <br />
                  &bull; Реализовал интеграцию с&nbsp;платежной системой,
                  кастомизировал синхронизацию данных
                  с&nbsp;1С&nbsp;в&nbsp;режиме реального времени для
                  оперативного получения информации о&nbsp;заказах и платежах.
                  <br />
                  &bull; Разработал анкету лояльности на сайте, телефон
                  из&nbsp;анкеты сначала проходит валидацию по&nbsp;коду
                  из&nbsp;смс на стороне&nbsp;1с, после все данные отправляются
                  на&nbsp;сервер 1с.
                  <br />
                  &bull; Внедрил систему контроля версий Git для организации
                  работы и отслеживания изменений.
                  <br />
                  &bull; Перенес весь кастом в&nbsp;local и полностью обновил
                  ядро сайта, все сторонние модули и&nbsp;MySQL до&nbsp;версии
                  8.0.
                  <br />
                  &bull; Отладил работу полного обмена из 1с&nbsp;на&nbsp;сайт
                  и&nbsp;расширил его функционал. (Важно было получать заказы
                  и&nbsp;данные об&nbsp;онлайн оплате моментально на&nbsp;сервер
                  1с).
                  <br />
                  &bull; Переносил проекты на&nbsp;VPS-сервера, настраивая
                  серверную инфраструктуру индивидуально под требования каждого
                  проекта.
                  <br />
                  &bull; Оптимизировал производительность веб-приложения,
                  сократив время загрузки страниц на&nbsp;30%.
                  <br />
                  &bull; Сопровождал разработку подробными комментариями
                  и&nbsp;технической документацией для облегчения дальнейшего
                  обслуживания и&nbsp;развития системы.
                  <br />
                </p>
                <button>PHP</button>
                <button>Bitrix Framework</button>
                <button>MySQL</button>
                <button>JavaScript</button>
                <button>jQuery</button>
                <button>Git</button>
                <button>Composer</button>
                <button>Bash</button>
                <button>Linux</button>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='false'
                aria-controls='collapseOne'
              >
                <strong>Frontend-разработчик @ Металлрезерв</strong>
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  • Создавал и добавлял элементы и блоки, верстка сайта и
                  рекламных лендингов, правки в продакшн, добавлял новый
                  функционал на сайт.
                  <br />
                  • SEO оптимизация, настройка Директа, анализ метрики.
                  <br />
                  • Создание рекламного контента в графических редакторах.
                  <br />
                  • Аналитика спроса.
                  <br />• SMM вел социальные сети и аккаунты на торговых
                  площадках.
                </p>
                <button>JavaScript</button>
                <button>PHP</button>
                <button>HTML</button>
                <button>Dev0ps</button>
                <button>Bootstrap</button>
                <button>SQL</button>
                <button>WordPress</button>
                <button>SEO</button>
                <button>Webpack</button>
                <button>Linux</button>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                <strong>Администратор сайта @ AutoTokyo</strong>
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  • Верстка сайта, многостраничного сайта по макетам и без,
                  WordPress, 1C-Bitix, PHP, SEO.
                  <br />
                  • Дебаггинг, работа с чужим кодом, внесение правок.
                  <br />
                  • SMM, Администрирование- telegram, YouTube, ВК, Дзен. <br />
                  • Администрирование сайта. Реклама и продвижение.
                  <br />
                  • Работа с клиентами, обработка заявок, общение в
                  мессенджерах, презентации, заключение сделок, CRM, расширение
                  клиентской базы.
                  <br />
                  • Техническая поддержка
                  <br />
                </p>
                <button>JavaScript</button>
                <button>Python</button>
                <button>HTML</button>
                <button>WordPress</button>
                <button>SEO</button>
                <button>Soft skills</button>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                <strong>Мастер по ремонту компьютеров @ SV-service</strong>
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  • Выезд к клиенту, установка ОС, ПО.
                  <br />
                  • Настройка оборудования.
                  <br />
                  • Ремонт техники смартфоны, пк, ноутбуки, телевизоры.
                  <br />
                  • Чистка, несложная пайка, диагностика.
                  <br />
                </p>
                <button>Soft skills</button>
                <button>Навыки общения и продаж</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='container contact__section d-flex flex-column scroll-animation-left'>
      <h5 className='text-center contact__title'>Предложения?</h5>
      <p className='text-center contact__descr'>
        Хотя я в данный момент не ищу новых возможностей, моя почта всегда
        открыта. Будь у вас вопрос или просто хотите сказать привет, я
        постараюсь ответить вам как можно скорее!
      </p>
      <a className='contact__email' href='mailto:enjoyhillol@gmail.com'>
        <span id='contact' />
      </a>
    </section> */}
  </main>
)

export default MainPage
