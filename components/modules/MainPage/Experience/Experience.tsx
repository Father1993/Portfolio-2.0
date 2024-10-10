import { useLang } from '@/hooks/useLang'

const Experience = () => {
  const { lang, translations } = useLang()

  return (
    <section className='work' id='experience'>
      <div className='container padding__container wrapper-margin scroll-animation-right'>
        <h2 className='work__title margin__text'>
          {translations[lang].experience.experience}
        </h2>
        <div className='work__desc'>
          <h4>{translations[lang].experience.title}</h4>
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
                <strong>{translations[lang].experience.fullStack}</strong>
              </button>
            </h2>
            <div
              id='collapseZero'
              className='accordion-collapse collapse show'
              aria-labelledby='headingZero'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>{translations[lang].experience.fullStack_descriptions}</p>
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
                <strong>{translations[lang].experience.frontend}</strong>
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>{translations[lang].experience.frontend_descriptions}</p>
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
                <strong>{translations[lang].experience.administrator}</strong>
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
                  {translations[lang].experience.administrator_descriptions}
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
                <strong>{translations[lang].experience.master}</strong>
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>{translations[lang].experience.master_descriptions}</p>
                <button>Soft skills</button>
                <button>Навыки общения и продаж</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
