import { Project, TranslationsObject } from '@/types/common'

export const getProjects = (
  translations: TranslationsObject,
  lang: string
): Project[] => [
  {
    id: 1,
    title: translations[lang].projects.react_web_app,
    description: translations[lang].projects.react_web_app_descr,
    image: '/img/project/tigai_preview.jpg',
    liveLink: 'https://tigay.ru/',
    codeLink: 'https://github.com/Father1993/Aleksey-Tigay-website',
  },
  {
    id: 2,
    title: translations[lang].projects.i_shop,
    description: translations[lang].projects.i_shop_descr,
    image: '/img/project/store_app.jpg',
    liveLink: 'https://main--somestorespinej.netlify.app/',
    codeLink: 'https://github.com/Father1993/Online-jewelry-store-via-API',
  },
  {
    id: 3,
    title: translations[lang].projects.xinrosh,
    description: translations[lang].projects.xinrosh_descr,
    image: '/img/project/xinros_preview.jpeg',
  },
  {
    id: 4,
    title: translations[lang].projects.book_lib,
    description: translations[lang].projects.book_lib_descr,
    image: '/img/project/lib_app.jpg',
    codeLink: 'https://github.com/Father1993/Books-Library-App',
  },
  {
    id: 5,
    title: translations[lang].projects.electrosystems,
    description: translations[lang].projects.electrosystems_descr,
    image: '/img/project/es-dv_preview.jpg',
    liveLink: 'https://es-dv.ru',
    codeLink: 'https://github.com/Father1993/es-dv',
  },
  {
    id: 6,
    title: translations[lang].projects.plumber,
    description: translations[lang].projects.plumber_descr,
    image: '/img/project/plumber_preview.jpg',
    liveLink: 'https://plumkhv.netlify.app/',
    codeLink: 'https://github.com/Father1993/Plumber-regional-site',
  },
  {
    id: 7,
    title: translations[lang].projects.wordpress_sites,
    description: translations[lang].projects.wordpress_sites_descr,
    image: '/img/project/perevozka27_preview.jpg',
    liveLink: 'https://perevozka27.ru/',
    codeLink: 'https://xn--90anbgibdchfetk.xn--p1ai/',
  },
  {
    id: 8,
    title: translations[lang].projects.students_app,
    description: translations[lang].projects.students_app_descr,
    image: '/img/project/students-form_preview.jpg',
    codeLink: 'https://github.com/Father1993/Vanila-JS-Forms-Filter-Render',
  },
  {
    id: 9,
    title: translations[lang].projects.react_app_old,
    description: translations[lang].projects.react_app_old_descr,
    image: '/img/project/react_app_preview.jpg',
    codeLink: 'https://github.com/Father1993/React_app_practice',
  },
  {
    id: 10,
    title: translations[lang].projects.docker_in_project,
    description: translations[lang].projects.docker_in_project_descr,
    image: '/img/project/time_app_nodejs_preview.jpg',
    codeLink: 'https://github.com/Father1993/Docker-full-practice',
  },
  {
    id: 11,
    title: translations[lang].projects.vanilla_js,
    description: translations[lang].projects.vanilla_js_descr,
    image: '/img/project/vanilla_js_preview.jpg',
    liveLink:
      'https://65c60a3cd060d29373d059d2--fascinating-quokka-0f8f87.netlify.app/',
    codeLink: 'https://github.com/Father1993/MemoryGameJS/tree/main',
  },
  {
    id: 12,
    title: translations[lang].projects.calculate_webapp,
    description: translations[lang].projects.calculate_webapp_descr,
    image: '/img/project/calc_preview.jpg',
    codeLink: 'https://github.com/Father1993/Foreign-car-buying-calculator',
  },
]

export default getProjects
