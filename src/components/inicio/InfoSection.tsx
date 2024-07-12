import { Link, ReactNode } from "@tanstack/react-router";
import { clsx } from "clsx";
import FadeImageSlider from "../shared/FadeImageSlider";
import useLanguage from "../../hooks/useLanguage";

export type InfoSectionProps = {
    index: number;
    slider?: boolean;
    imgSrc?: string;
    imgTitle?: { en: string, es: string };
    gallery?: { src: string, alt: string }[];
    title: { en: string, es: string }
    description: { en: string, es: string }
    button?: boolean;
    customContent?: ReactNode
    link?: string;
}

function InfoSection({ index, slider = false, imgSrc, imgTitle, gallery = [], title, description, button = true, customContent, link = "" }: InfoSectionProps) {
    const { language } = useLanguage();
    return (
        <section className="min-h-[50svh] md:min-h-[100svh] w-full relative flex">
            {
                slider ? <FadeImageSlider slides={gallery} /> :
                    <img className="size-full absolute object-cover" src={imgSrc} alt={imgTitle?.[language]} />
            }
            <div className={clsx("xl:w-[20%] lg:w-[30%] md:w-[40%] w-full z-10 p-4 flex flex-col justify-center relative md:absolute text-white min-h-full md:min-h-[100svh] bg-blur backdrop-blur-[1px] md:backdrop-blur-md shadow-section gap-4 md:gap-10",
                index % 2 !== 0 ? "md:right-[50px]" : "md:left-[50px]")}>
                <h2 className="text-3xl md:text-5xl font-semibold text-balance break-words">
                    {title[language]}
                </h2>
                <section className="flex flex-col gap-4">
                    <p className="text-xl text-pretty">
                        {description[language]}
                    </p>
                    {button &&
                        <Link key={`section-${link}`} className="w-full bg-[#61CE70] p-2 rounded-2xl grid place-items-center text-black font" to={link}>
                            {language === "es" ? "Leer más" : "Read more"}
                        </Link>
                    }
                    {customContent}
                </section>

            </div>
        </section>
    )
}

export default InfoSection
