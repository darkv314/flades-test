import flades from "../../assets/shared/logoFlades.png"
import { Link } from "@tanstack/react-router"
import { navTitles } from "../../data/shared"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { IconoirProvider, Menu, Xmark } from "iconoir-react";

function Navbar() {
    const [_, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 30;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="flex justify-between items-center md:pl-10 md:pr-14 sm:pl-4 sm:pr-8 pr-2">
            <Link to="/">
                <img className="w-40 sm:w-48" src={flades} alt="Fundación Flades Logo" />
            </Link>
            <ul className="gap-4 hidden sm:flex">
                {navTitles.map((link) => (
                    <li className="capitalize hover:underline text-[#35ad35] font-semibold font-" key={link.to}>
                        <Link to={link.to}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <Button onPress={() => setMenuOpen(true)} className="sm:hidden bg-transparent w-min p-2 min-w-fit">
                <IconoirProvider>
                    <Menu />
                </IconoirProvider>
            </Button>
            <AnimatePresence mode="sync">
                {
                    menuOpen && <NavMenu setMenuOpen={setMenuOpen} />
                }
            </AnimatePresence>
        </nav>
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
    return (
        <motion.div className='size-full fixed top-0 left-0 grid bg-[#000000bf] backdrop-blur-sm z-40' onClick={() => setMenuOpen(false)}>
            <motion.div transition={{
                x: { type: 'spring', bounce: 0, duration: 0.25 },
            }} variants={animation}
                initial="hidden"
                animate="visible"
                exit="exit" onClick={(e) => e.stopPropagation()} className='p-4 bg-[#89918640] h-full w-[50%] justify-self-end z-50 relative flex flex-col gap-4'>
                <Link onClick={() => setMenuOpen(false)} to='/' className='font-questrial flex gap-1 items-center justify-center'>
                    <img className='w-40' src={flades} alt="Fundación Flades Logo" />
                </Link>
                <div className='w-full bg-white h-[1px]'></div>
                <ul className='gap-4 flex flex-col items-center'>
                    {navTitles.map((link) => (
                        <Link onClick={() => setMenuOpen(false)} key={link.to} className='hover:underline flex gap-1 items-center capitalize text-white' to={link.to}>
                            {link.title}
                        </Link>
                    ))}
                </ul>
                <Button onPress={() => setMenuOpen(false)} className='justify-self-end hover:bg-[#DB2C48]'>
                    <IconoirProvider>
                        <Xmark />
                    </IconoirProvider>
                </Button>
            </motion.div>
        </motion.div>
    )
}