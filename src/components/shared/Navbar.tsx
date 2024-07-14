import flades from "../../assets/shared/logoFlades.png"
import { Link, useLocation } from "@tanstack/react-router"
import { languages, navTitles } from "../../data/shared"
import { Dispatch, Key, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconoirProvider, Menu, Xmark } from "iconoir-react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { clsx } from "clsx";
import useLanguage from "../../hooks/useLanguage";
import useScroll from "../../hooks/useScroll";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language } = useLanguage();
    const { pathname } = useLocation();
    const isScrolled = useScroll({ scrollY: 30 });

    return (
        <>
            <nav className={clsx("fixed w-full px-2 lg:py-0 py-0 gap-8 top-0 z-30 flex backdrop-blur-[10px] justify-between items-center md:pl-10 md:pr-14 sm:pl-4 sm:pr-8 pr-2 transition-all",
                isScrolled && "bg-[#50505033] backdrop-blur-[10px] transition-all", pathname === "/" && "sticky", pathname !== '/' && "bg-[#50505033] ")}>
                <Link to="/">
                    <img className="w-40 md:48" src={flades} alt="Fundación Flades Logo" />
                </Link>
                <ul className="gap-4 hidden lg:flex items-center">
                    {navTitles.map((link) => (
                        <li className={clsx("capitalize hover:underline text-[#35ad35] font-semibold text-center transition-all", isScrolled && 'text-white transition-all')} key={link.to}>
                            <Link to={link.to}>{link.title[language]}</Link>
                        </li>
                    ))}
                    <SelectLanguage />
                </ul>
                <button onClick={() => {
                    setMenuOpen(true)
                }} className="lg:hidden bg-transparent w-min p-2 min-w-fit">
                    <IconoirProvider>
                        <Menu />
                    </IconoirProvider>
                </button>

            </nav>
            <AnimatePresence mode="sync">
                {
                    menuOpen && <NavMenu setMenuOpen={setMenuOpen} />
                }
            </AnimatePresence>
        </>

    )
}

export default Navbar

type NavMenuProps = {
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}

function NavMenu({ setMenuOpen }: NavMenuProps) {
    const animation = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 250, opacity: 0 },
    };
    const { language } = useLanguage();

    return (
        <motion.nav className='size-full min-h-[100dvh] fixed top-0 left-0 grid bg-[#000000bf] backdrop-blur-sm z-40' onClick={() => setMenuOpen(false)}>
            <motion.div
                transition={{
                    x: { type: 'spring', bounce: 0, duration: 0.25 },
                }}
                variants={animation}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className='p-4 bg-[#89918640] h-full w-[50%] justify-self-end z-50 relative top-0 flex flex-col gap-4'
            >
                <Link onClick={() => setMenuOpen(false)} to='/' className='grid place-items-center'>
                    <img className='w-40' src={flades} alt="Fundación Flades Logo" />
                </Link>
                <div className='w-full bg-white h-[1px]'></div>
                <ul className='gap-4 flex flex-col items-center'>
                    {navTitles.map((link) => (
                        <li key={link.to}>
                            <Link onClick={() => setMenuOpen(false)} className='hover:underline flex gap-1 items-center capitalize text-white' to={link.to}>
                                {link.title[language]}
                            </Link>
                        </li>
                    ))}
                    <li className="w-full">
                        <SelectLanguage width="100%" />
                    </li>
                </ul>
                <button onClick={() => {
                    setMenuOpen(false)
                }} className='justify-self-end hover:bg-[#DB2C48] bg-slate-200 rounded-xl grid place-items-center p-2'>
                    <IconoirProvider>
                        <Xmark />
                    </IconoirProvider>
                </button>
            </motion.div>
        </motion.nav>
    )
}

type SelectLanguageProps = {
    width?: string;
}

function SelectLanguage({ width = '150px' }: SelectLanguageProps) {
    const { language, setLanguage } = useLanguage();

    const handleSelectionChange = (e: Key | null) => {
        setLanguage(e as 'es' | 'en');
    };

    return (
        <Autocomplete inputProps={{
            disabled: true
        }} isClearable={false} defaultItems={languages} selectedKey={language} onSelectionChange={handleSelectionChange} className={clsx(width ? `w-[${width}]` : 'w-[100%]')} label={language === 'en' ? "Language" : "Idioma"} placeholder="Selecciona un lenguaje">
            {
                (language) => <AutocompleteItem key={language.value} value={language.value} textValue={language.label}>
                    <div className="flex gap-2 items-center">
                        <span className="size-4 grid place-items-center rounded-sm">
                            {language.flag}
                        </span> {language.label}
                    </div>
                </AutocompleteItem>
            }
        </Autocomplete>
    )
}