/* eslint-disable max-len */
import { LanguageButtonProps } from '@/types/common'

const LanguageButton: React.FC<LanguageButtonProps> = ({
  lang,
  currentLang,
  onClick,
  label,
  className,
}) => (
  <button
    className={`header__btn ${lang.toLowerCase()} ${className} btn-outline-light ${currentLang === lang ? 'lang-active' : ''}`}
    onClick={onClick}
    style={{
      backgroundColor: currentLang === lang ? '#00c26a' : 'transparent',
    }}
    aria-label={`Переключить на ${label}`}
    aria-pressed={currentLang === lang}
  >
    {lang.toUpperCase()}
  </button>
)

export default LanguageButton
