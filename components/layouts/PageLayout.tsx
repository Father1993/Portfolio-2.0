'use client'
import Next13ProgressBar from 'next13-progressbar'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout'
import Header from '../modules/Header/Header'
import Script from 'next/script'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  console.log('')

  return (
    <html lang='ru'>
      <body id='playpen'>
        <Toaster position='top-right' />
        <Next13ProgressBar height='4px' color='#9466FF' showOnShallow />
        <Header />
        <main className='pt-40'>
          <Layout>{children}</Layout>
        </main>
        <Toaster position='top-center' reverseOrder={false} />
        <Script
          src='https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js'
          strategy='afterInteractive'
        />
        <Script
          src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'
          strategy='afterInteractive'
        />
        <Script src='/bootstrap.min.js' strategy='afterInteractive' />
      </body>
    </html>
  )
}

export default PagesLayout
