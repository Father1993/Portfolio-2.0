/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import { ABOUT_SKILLS } from '@/constants/skills'
import { useLang } from '@/hooks/useLang'
import { basePropsForMotion } from '@/constants/motion'

const About = () => {
  const { lang, translations } = useLang()

  return (
    <motion.section {...basePropsForMotion} className='about'>
      <div className='about__wrapper container padding__container'>
        <div className='about__title'>
          <h2 className='about__us margin__text'>Обо мне</h2>
          <div className='about__container'>
            <div className='about__block' id='about-me'>
              <div className='block__info'>
                <p>{translations[lang].about.history_text_1}</p>
                <p>{translations[lang].about.history_text_2}</p>
                <p>{translations[lang].about.history_text_3}</p>
                <p>{translations[lang].about.history_text_4}</p>
                <p>{translations[lang].about.history_text_5}</p>
              </div>
              <div className='about__skills-wrapper'>
                <ul className='about__skills'>
                  {ABOUT_SKILLS.map((skill) => (
                    <li key={skill} className='about__list'>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='about__photo'>
              <img
                decoding='async'
                className='photo__card'
                src='/img/assets/my-1280.webp'
                srcSet='
                  /img/assets/my-480.webp   480w,
                  /img/assets/my-768.webp   768w,
                  /img/assets/my-1280.webp 1280w
                '
                sizes='(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px'
                alt='Andrej Spinej'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
export default About
