import { createContext, useState, useContext, useEffect } from 'react';
import { languages } from '../lang';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ro');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = languages[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);