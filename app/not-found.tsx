/* eslint-disable max-len */
'use client'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

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
