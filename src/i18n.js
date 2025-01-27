import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ro from './locales/ro/translation.json';

// Citește limba din localStorage sau folosește limba implicită
const savedLanguage = localStorage.getItem('language') || 'ro';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ro: { translation: ro },
  },
  lng: savedLanguage, // Setează limba selectată sau implicită
  fallbackLng: 'ro',
  interpolation: {
    escapeValue: false, // React deja scăpa valorile
  },
});

// Ascultă schimbarea limbii și actualizează localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
