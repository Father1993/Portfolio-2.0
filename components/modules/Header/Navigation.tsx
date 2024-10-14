import Link from 'next/link'
import { NavigationProps, TranslationHeader } from '@/types/common'

const Navigation = ({ lang, translations }: NavigationProps) => (
  <ul className='nav text-end header__nav-mobile'>
    {(
      Object.keys(translations[lang].header) as Array<keyof TranslationHeader>
    ).map((item) => (
      <li key={item}>
        <Link
          href={`#${item}`}
          className='header__nav-link nav-link text-white px-2 '
        >
          {translations[lang].header[item]}
        </Link>
      </li>
    ))}
  </ul>
)

export default Navigation
