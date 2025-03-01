/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from '@/hooks/useLang'
import { SKILLS } from '@/constants/skills'
import { basePropsForMotion } from '@/constants/motion'

const Skills = () => {
  const { lang, translations } = useLang()

  return (
    <motion.section
      {...basePropsForMotion}
      className='skills mt-20'
      id='skills'
    >
      <div className='skills__wrapper container scroll-animation-right'>
        <div className='row'>
          <h2 className='skills__title margin__text'>Skills</h2>
          <h3 className='skills__description text-center'>
            {translations[lang].skills.text}
          </h3>
          <div className='skills__block'>
            <ul className='skills__list'>
              {SKILLS.map((skill) => (
                <li key={skill.name}>
                  <Image
                    src={skill.icon}
                    alt={`${skill.name}_icon`}
                    width={65}
                    height={65}
                    className='skills__icon'
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
export default Skills
