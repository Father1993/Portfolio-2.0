/* eslint-disable @next/next/no-img-element */
const About = () => (
  <section className='about'>
    <div className='about__wrapper container padding__container'>
      <div className='about__title scroll-animation-left'>
        <h2 className='about__us margin__text'>Обо мне</h2>
        <div className='about__container'>
          <div className='about__block' id='about-me'>
            <div className='block__info'>
              <p>
                Мне нравится создавать вещи, которые живут в&nbsp;интернете. Мой
                интерес к&nbsp;веб-разработке начался еще в&nbsp;2020&nbsp;году,
                когда я&nbsp;решил попробовать создать сайт. И&nbsp;оказывается,
                создание даже пользовательской кнопки научило меня многому!
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
                Много времени я&nbsp;занимался продвижением сайтов в&nbsp;сети,
                знаю семантическую верстку, знаком с&nbsp;техническим SEO. Знаю
                как настроить и&nbsp;опубликовать проект на&nbsp;сервере. И
                настроить рекламные каналы.
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
)

export default About
