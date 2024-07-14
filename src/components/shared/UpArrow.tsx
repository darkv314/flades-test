import { AnimatePresence, motion } from 'framer-motion'
import { RefObject, useEffect } from 'react'
import useScroll from '../../hooks/useScroll';
import { IconoirProvider, MapsArrow } from 'iconoir-react';

const buttonAnimation = {
    hidden: { x: 0, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 0, opacity: 0 },
};

type UpArrowProps = {
    buttonsRef: RefObject<HTMLDivElement>
    isBigger?: boolean
}

function UpArrow({ buttonsRef, isBigger = false }: UpArrowProps) {
    const isScrolled = useScroll({ scrollY: 1000 });
    useEffect(() => {
        buttonsRef.current?.classList.add(isBigger ? 'scroll-my-32' : 'scroll-my-[5.5rem]')
    }, [buttonsRef])
    return (
        <AnimatePresence>
            {isScrolled && <motion.button
                transition={{
                    x: { type: 'spring', bounce: 0, duration: 0.25 },
                }}
                variants={buttonAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => {
                    buttonsRef.current?.scrollIntoView({ behavior: 'smooth' })
                }} className='transition-all fixed bottom-4 right-4 z-10 rounded-full p-4 grid place-items-center bg-[#06F93B]'>
                <IconoirProvider>
                    <MapsArrow />
                </IconoirProvider>
            </motion.button>}
        </AnimatePresence>
    )
}

export default UpArrow
