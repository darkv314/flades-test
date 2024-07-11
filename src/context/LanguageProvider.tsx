import { ReactNode, createContext, useState } from "react";
const LanguageContext = createContext({});

type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<"es" | "en">("es");

    return (
        <LanguageContext.Provider value={{ language: language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;