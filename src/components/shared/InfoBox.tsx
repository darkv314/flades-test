import { ReactNode } from "@tanstack/react-router";
import { IconoirProvider } from "iconoir-react";
import useLanguage from "../../hooks/useLanguage";
import { clsx } from "clsx";

type InfoBoxProps = {
    id: string;
    title: string;
    color: string;
    icon: ReactNode,
    textColor?: boolean;
    items: {
        es: string;
        en: string;
    }[];
    secondTitle?: string;
    secondItems?: {
        es: string;
        en: string;
    }[];
}

function InfoBox({ id, title, items, color, icon, secondTitle = '', secondItems = [], textColor = false }: InfoBoxProps) {
    return (
        <section id={id} className={clsx('grid w-full place-items-center scroll-my-32', textColor && 'text-white')}>
            <div style={{
                backgroundColor: color,
            }} className={clsx(`p-8 border-2 rounded-lg border-black w-[80%] max-w-[80%] gap-8 grid place-items-center`)}>
                <InfoContent title={title} items={items} icon={icon} />
                {secondTitle && <InfoContent title={secondTitle} items={secondItems} icon={icon} />}
            </div>
        </section>
    )
}

export default InfoBox

type InfoContentProps = {
    title: string;
    icon: ReactNode;
    items: {
        es: string;
        en: string;
    }[];
}

function InfoContent({ items, title, icon }: InfoContentProps) {
    const { language } = useLanguage();
    return (
        <>
            <h2 className='text-2xl sm:text-4xl font-bold text-center'>{title}</h2>
            <ul className='list-none list-inside grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                {items.map((item, index) => (
                    <li key={index} className='text-pretty grid grid-cols-[auto_1fr] gap-4'>
                        <IconoirProvider>
                            {icon}
                        </IconoirProvider>
                        <p>{item[language]}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
