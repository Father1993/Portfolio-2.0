'use client'
import Next13ProgressBar from 'next13-progressbar'
import { motion } from 'framer-motion'
import Layout from './Layout'
import Header from '../modules/Header/Header'
import { useMouseHighlight } from '@/hooks/useMouseHighlight'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  useMouseHighlight('playpen')

  return (
    <html lang='ru'>
      <body id='playpen'>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          style={{
            backgroundImage: 'url("/img/assets/a_background.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '400px',
            zIndex: -1,
          }}
        />
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
