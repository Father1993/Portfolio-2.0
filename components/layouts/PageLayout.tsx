'use client'
import Next13ProgressBar from 'next13-progressbar'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout'
import Header from '../modules/Header/Header'
import { useMouseHighlight } from '@/hooks/useMouseHighlight'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  useMouseHighlight('playpen')

  return (
    <html lang='ru'>
      <body id='playpen'>
        <Toaster position='top-right' />
        <Next13ProgressBar height='4px' color='#9466FF' showOnShallow />
        <Header />
        <main>
          <Layout>{children}</Layout>
        </main>
        <Toaster position='top-center' reverseOrder={false} />
      </body>
    </html>
  )
}

export default PagesLayout
