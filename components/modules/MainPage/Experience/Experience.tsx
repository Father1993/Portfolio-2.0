const Experience = () => (
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
                кастомизировал синхронизацию данных с&nbsp;1С&nbsp;в&nbsp;режиме
                реального времени для оперативного получения информации
                о&nbsp;заказах и платежах.
                <br />
                &bull; Разработал анкету лояльности на сайте, телефон
                из&nbsp;анкеты сначала проходит валидацию по&nbsp;коду
                из&nbsp;смс на стороне&nbsp;1с, после все данные отправляются
                на&nbsp;сервер 1с.
                <br />
                &bull; Внедрил систему контроля версий Git для организации
                работы и отслеживания изменений.
                <br />
                &bull; Перенес весь кастом в&nbsp;local и полностью обновил ядро
                сайта, все сторонние модули и&nbsp;MySQL до&nbsp;версии 8.0.
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
                &bull; Оптимизировал производительность веб-приложения, сократив
                время загрузки страниц на&nbsp;30%.
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
                • Работа с клиентами, обработка заявок, общение в мессенджерах,
                презентации, заключение сделок, CRM, расширение клиентской базы.
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
)

export default Experience
