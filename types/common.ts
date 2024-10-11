import { AllowedLangs } from '@/constants/lang'

export type TranslationHeader = {
  about: string
  skills: string
  projects: string
  experience: string
  contacts: string
}

export type Translations = {
  [key in AllowedLangs]: {
    header: TranslationHeader
  }
}

export type NavigationProps = {
  lang: AllowedLangs
  translations: Translations
}

export interface LanguageButtonProps {
  lang: AllowedLangs
  currentLang: AllowedLangs
  onClick: () => void
  label: string
}
