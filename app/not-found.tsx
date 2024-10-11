/* eslint-disable max-len */
'use client'
import { Metadata } from 'next'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

export const metadata: Metadata = {
  title: 'Страница не найдена | Spinej.ru',
  description:
    'К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу Spinej.ru для поиска нужной информации о грузоперевозках в Хабаровске.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 - Страница не найдена | Spinej.ru',
    description:
      'Извините, запрашиваемая страница не существует. Вернитесь на главную Spinej.ru',
    type: 'website',
    url: 'https://spinej.ru/404',
    images: [
      {
        url: '/img/404-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '404 - Страница не найдена | Spinej.ru',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '404 - Страница не найдена | Spinej.ru',
    description:
      'Упс! Страница, которую вы ищете, не существует. Вернитесь на главную Spinej.ru',
    images: '/img/android-chrome-192x192.png',
  },
}

const NotFound = () => {
  const { lang, translations } = useLang()

  return (
    <main className='flex-grow flex items-center justify-center bg-grey'>
      <div className='not-found__page text-center'>
        <h1 className='text-6xl font-bold text-white-800 md:text-8xl'>404</h1>
        <p className='mt-4 text-lg text-white-700 md:text-xl'>
          {translations[lang].common.not_fount}
        </p>
        <div className='mt-6'>
          <Link
            href='/'
            className='inline-block px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300'
          >
            {translations[lang].common.go_back}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
