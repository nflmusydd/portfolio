import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import id from './locales/id/translation.json';

const savedLanguage = localStorage.getItem('preferredLang') || 'en';
console.log(localStorage.getItem('preferredLang'))

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
