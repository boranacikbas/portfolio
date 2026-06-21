import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('tr');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Uygulama açıldığında HTML etiketine dark class'ını duruma göre ekle/çıkar
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ lang, theme, toggleTheme, changeLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
