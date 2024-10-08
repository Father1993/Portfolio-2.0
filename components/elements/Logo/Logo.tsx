import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link className='logo' href='/'>
    <Image
      src='/img/logo.png'
      alt='Spinej.ru Logo'
      width={isScrolled ? 60 : 130}
      height={isScrolled ? 60 : 130}
      className='transition-all duration-500 ease-in-out'
    />
  </Link>
)

export default Logo
