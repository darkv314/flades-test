import { ReactNode } from "react";
import FadeImageSlider from "./FadeImageSlider";
import { clsx } from "clsx";

type PageBannerProps = {
    title: string;
    content: string;
    slides: { src: string; alt: string }[];
    children?: ReactNode;
}

function PageBanner({ title, slides, children, content }: PageBannerProps) {
    return (
        <section className='relative'>
            <FadeImageSlider slides={slides} />
            <div className={clsx(`h-[100svh] backdrop-blur-[2px] px-8 bg-blur flex flex-col items-center justify-center text-white gap-4 lg:gap-12 relative z-10`)}>
                <section className='flex flex-col text-center max-w-[60ch] items-center gap-4'>
                    <h1 className='text-6xl font-bold'>{title}</h1>
                    <p className='text-xl'>{content}</p>
                </section>
                {children}
            </div>
        </section>
    )
}

export default PageBanner
