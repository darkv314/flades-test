import { Dispatch, SetStateAction, useContext } from "react";
import LanguageContext from "../context/LanguageProvider";

type ContextType = {
    language: "es" | "en";
    setLanguage: Dispatch<SetStateAction<"es" | "en">>;
};

const useLanguage = () => {
    return useContext(LanguageContext) as ContextType;
};

export default useLanguage;