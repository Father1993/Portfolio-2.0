/* eslint-disable indent */
/* eslint-disable max-len */
'use client'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Logo from '@/components/elements/Logo/Logo'
import MobileMenu from './MobileMenu'
import ClientOnlyNavigation from './ClientOnlyNavigation'
import ClientOnlyCallButton from './ClientOnlyCallButton'

const Header = () => {
  const isMedia768 = useMediaQuery(768)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-xs m-4 rounded-full shadow-lg border border-white/10'
              : 'bg-gradient-to-r from-blue-900 to-purple-900'
          }
          ${isScrolled ? 'py-2' : 'py-0'}
        `}
      >
        <div
          className={`container mx-auto flex justify-between items-center p-4 transition-all duration-500 ease-in-out
          ${isScrolled ? 'max-w-7xl' : 'max-w-full'}
        `}
        >
          <div className='header__logo'>
            <Logo isScrolled={isScrolled} />
          </div>

          <ClientOnlyNavigation />

          {isMedia768 && (
            <button
              className={`btn-reset burger-menu ${isScrolled ? 'scale-90' : 'scale-100'}`}
              onClick={handleMobileMenuToggle}
            />
          )}

          <ClientOnlyCallButton isScrolled={isScrolled} />
        </div>
      </header>
      {isMobileMenuOpen && (
        <MobileMenu onClose={handleMobileMenuToggle} isScrolled={isScrolled} />
      )}
    </>
  )
}

export default Header
