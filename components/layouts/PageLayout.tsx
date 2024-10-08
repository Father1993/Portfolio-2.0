'use client'
import { useEffect, useState } from 'react'
import Next13ProgressBar from 'next13-progressbar'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout'
import Header from '../modules/Header/Header'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const [cookieAlertOpen, setCookieAlertOpen] = useState(false)

  useEffect(() => {
    const checkCookie = document.cookie.indexOf('CookieBy=Perevozka27.ru')
    checkCookie != -1
      ? setCookieAlertOpen(false)
      : setTimeout(() => setCookieAlertOpen(true), 3000)
  }, [])

  return (
    <html lang='ru'>
      <body>
        <Toaster position='top-right' />
        <Next13ProgressBar height='4px' color='#9466FF' showOnShallow />
        <Header />
        <main className='pt-40'>
          <Layout>{children}</Layout>
        </main>
        <Toaster position='top-center' reverseOrder={false} />
      </body>
    </html>
  )
}

export default PagesLayout
