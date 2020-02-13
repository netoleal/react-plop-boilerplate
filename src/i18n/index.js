import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useLink } from '../hooks';
import { resources, DEFAULT_LANG } from './resources';

const [currentFromURL] = useLink();

i18n.use(initReactI18next).init({
  resources,
  lng: currentFromURL || DEFAULT_LANG,

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
