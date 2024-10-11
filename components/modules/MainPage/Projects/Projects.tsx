/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import { useLang } from '@/hooks/useLang'
import getProjects from '@/constants/projects'

const Projects = () => {
  const { lang, translations } = useLang()
  const projects = getProjects(translations, lang)
  const [visibleProjects, setVisibleProjects] = useState(3)
  const lastProjectRef = useRef<HTMLDivElement>(null)

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3)

    // Используем setTimeout, чтобы дать React время для рендеринга новых карточек
    setTimeout(() => {
      if (lastProjectRef.current) {
        const yOffset = -70 // Смещение на 30 пикселей вверх
        const y =
          lastProjectRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)
  }

  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section
      className='jobs mt-40'
      id='project'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl font-bold text-center mb-12'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {translations[lang].projects.title}
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className='card-body bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'
                ref={index === visibleProjects - 1 ? lastProjectRef : null}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='project__img'
                />
                <div className='p-6'>
                  <h3 className='font-semibold text-xl mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-whitesmoke mb-4'>{project.description}</p>
                  <div className='flex justify-between'>
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project__link project__link-preview text-blue-500 hover:text-green-700 transition-colors duration-300'
                    >
                      Live Preview
                    </a>
                    <a
                      href={project.codeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project__link project__link-code text-green-500 hover:text-green-700 transition-colors duration-300'
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {visibleProjects < projects.length && (
          <div className='text-center mt-12'>
            <button onClick={loadMore} className='show-more-btn'>
              {translations[lang].common.show_more}
            </button>
          </div>
        )}
      </div>
      <div className='text-center mt-12'>
        <a
          href='https://github.com/Father1993'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300'
        >
          {translations[lang].common.more_projects_in_gitHub}
        </a>
      </div>
    </motion.section>
  )
}

export default Projects
