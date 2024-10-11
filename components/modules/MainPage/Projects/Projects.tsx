/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import getProjects from '@/constants/projects'

const Projects = () => {
  const { lang, translations } = useLang()
  const projects = getProjects(translations, lang)

  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    setVisibleProjects((prevVisible) =>
      Math.min(prevVisible + 3, projects.length)
    )
  }

  return (
    <section className='jobs' id='project'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          {translations[lang].projects.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className='bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='font-semibold text-xl mb-2'>{project.title}</h3>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <div className='flex justify-between'>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:text-blue-700 transition-colors duration-300'
                  >
                    Live Preview
                  </a>
                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-500 hover:text-green-700 transition-colors duration-300'
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className='text-center mt-12'>
            <button
              onClick={loadMore}
              className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300'
            >
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
    </section>
  )
}

export default Projects
