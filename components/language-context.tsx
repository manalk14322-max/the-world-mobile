"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("site_language");
    if (saved === "es" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        setLanguage(next);
        window.localStorage.setItem("site_language", next);
      }
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
