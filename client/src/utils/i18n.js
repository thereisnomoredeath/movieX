import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      'en-US': [ 'en' ],
      uk: [ 'uk' ],
      default: [ 'en' ],
    },
    whitelist: [ 'en', 'uk' ],
    debug: false,
    detection: {
      order: [ 'localStorage', 'cookie' ],
      caches: [ 'localStorage', 'cookie' ],
    },
    interpolation: {
      escapeValue: false,
    },
    useSuspense: true,
  })

export default i18n