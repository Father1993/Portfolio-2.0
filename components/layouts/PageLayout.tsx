'use client'
import Next13ProgressBar from 'next13-progressbar'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout'
import Header from '../modules/Header/Header'

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
      </body>
    </html>
  )
}

export default PagesLayout
