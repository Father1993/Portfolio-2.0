/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import { useEffect, useState } from 'react'
import { faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <FontAwesomeIcon icon={faArrowUp} size='3x' color='grey' />
      </button>
      <Link
        href='tel:+79622285219'
        className={`fixed bottom-4 right-20 z-50 transition-all duration-300 ease-in-out transform hover:scale-110 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className='relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
          <button className='relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg'>
            <FontAwesomeIcon icon={faPhone} size='lg' />
          </button>
        </div>
        <span className='absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full animate-pulse'>
          Позвонить
        </span>
      </Link>
    </>
  )
}

export default ScrollBtn
