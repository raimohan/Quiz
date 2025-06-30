
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface QuizLanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const QuizLanguageContext = createContext<QuizLanguageContextType | undefined>(undefined);

export const QuizLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'hi' : 'en'));
  };

  return (
    <QuizLanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </QuizLanguageContext.Provider>
  );
};

export const useQuizLanguage = () => {
  const context = useContext(QuizLanguageContext);
  if (context === undefined) {
    throw new Error('useQuizLanguage must be used within a QuizLanguageProvider');
  }
  return context;
};
