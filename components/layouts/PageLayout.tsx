'use client'
import Next13ProgressBar from 'next13-progressbar'
import Layout from './Layout'
import Header from '../modules/Header/Header'
import { useMouseHighlight } from '@/hooks/useMouseHighlight'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  useMouseHighlight('playpen')

  return (
    <html lang='ru'>
      <body id='playpen'>
        <Next13ProgressBar height='4px' color='#258a07' showOnShallow />
        <Header />
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  )
}

export default PagesLayout
