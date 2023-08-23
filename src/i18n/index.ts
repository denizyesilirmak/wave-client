import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import tr_strings from "./strings/tr.json";
import en_strings from "./strings/en.json";
import it_strings from "./strings/it.json";

export const LANGUAGES = {
  ENGLISH: {
    code: "en",
    name: "English",
    culture: "en-US",
  },
  TURKISH: {
    code: "tr",
    name: "Turkish",
    culture: "tr-TR",
  },
  ITALIAN: {
    code: "it",
    name: "Italian",
    culture: "it-IT",
  },
};

const getInitialLanguage = () => {
  const persistedLanguage = localStorage.getItem("language");
  return persistedLanguage ? persistedLanguage : LANGUAGES.ENGLISH.code;
};

export const changeLanguage = (language: string) => {
  localStorage.setItem("language", language);
  i18n.changeLanguage(language);
};

export const getLanguage = () => {
  return i18n.language;
};

i18n.use(initReactI18next).init({
  resources: {
    [LANGUAGES.ENGLISH.code]: {
      translation: en_strings,
    },
    [LANGUAGES.TURKISH.code]: {
      translation: tr_strings,
    },
    [LANGUAGES.ITALIAN.code]: {
      translation: it_strings,
    },
  },
  lng: getInitialLanguage(),
  fallbackLng: LANGUAGES.ENGLISH.code,
  interpolation: {
    escapeValue: false,
  },
});

export const translate = (key: string) => {
  return i18n.t(key);
};
