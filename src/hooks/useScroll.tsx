import { useEffect, useState } from "react";

type useScrollProps = {
    scrollY: number;
}

function useScroll({ scrollY }: useScrollProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > scrollY;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return isScrolled;
}

export default useScroll
