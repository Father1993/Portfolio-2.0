/* eslint-disable arrow-body-style */
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '@/hooks/useLang'

const Experience = () => {
  const { lang, translations } = useLang()
  const [activeIndex, setActiveIndex] = useState(0)

  const experienceItems = [
    {
      title: translations[lang].experience.web_developer,
      description: translations[lang].experience.web_developer_descriptions,
      skills: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Python',
        'React',
        'GitHub Actions',
        'CI/CD',
        'Node.js',
        'MongoDB',
        'REST API',
        'SEO',
      ],
    },
    {
      title: translations[lang].experience.fullStack,
      description: translations[lang].experience.fullStack_descriptions,
      skills: [
        'PHP',
        'Bitrix Framework',
        'MySQL',
        'JavaScript',
        'jQuery',
        'Git',
        'Composer',
        'Bash',
        'Linux',
      ],
    },
    {
      title: translations[lang].experience.frontend,
      description: translations[lang].experience.frontend_descriptions,
      skills: [
        'JavaScript',
        'PHP',
        'HTML',
        'DevOps',
        'Bootstrap',
        'SQL',
        'WordPress',
        'SEO',
        'Webpack',
        'Linux',
      ],
    },
    {
      title: translations[lang].experience.administrator,
      description: translations[lang].experience.administrator_descriptions,
      skills: [
        'JavaScript',
        'Python',
        'HTML',
        'WordPress',
        'SEO',
        'Soft skills',
      ],
    },
    {
      title: translations[lang].experience.master,
      description: translations[lang].experience.master_descriptions,
      skills: [
        'Computer hardware',
        'Operating systems',
        'Network technologies',
        'Soft skills',
      ],
    },
  ]

  // Функция для безопасного рендеринга HTML
  const createMarkup = (html: string) => {
    return { __html: html }
  }

  return (
    <section className='py-16 mt-16' id='experience'>
      <div className='container mx-auto px-4'>
        <h2 className='work__title margin__text'>
          {translations[lang].experience.experience}
        </h2>

        <div className='max-w-4xl mx-auto'>
          {experienceItems.map((item, index) => (
            <div key={index} className='mb-8'>
              <button
                className={`border w-full text-left p-6 rounded-lg transition-all duration-300 ${
                  activeIndex === index ? 'shadow-lg' : 'hover:bg-gray-700'
                }`}
                onClick={() =>
                  setActiveIndex(index === activeIndex ? -1 : index)
                }
              >
                <div className='flex justify-between items-center'>
                  <h3 className='text-sm font-semibold text-white'>
                    {item.title}
                  </h3>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className=' rounded-b-lg p-6 mt-1'
                  >
                    <p
                      className='text-gray-300 text-sm mb-4'
                      dangerouslySetInnerHTML={createMarkup(item.description)}
                    />

                    <div className='flex flex-wrap gap-2'>
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className='px-1 text-white rounded-full text-sm border'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
