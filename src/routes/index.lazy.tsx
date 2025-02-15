import { createLazyFileRoute } from '@tanstack/react-router'
import NuestrosAliados from '../components/inicio/NuestrosAliados';
import { infoSections, ourAlliesTitle } from '../data/inicio';
import InfoSection from '../components/inicio/InfoSection';
import useLanguage from '../hooks/useLanguage';
import { brands } from "../data/inicio";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const { language } = useLanguage();
    return (
        <div>
            <section className='flex flex-col items-center gap-4'>
                <h2 className='text-xl font-semibold'>{ourAlliesTitle[language]}</h2>
                <NuestrosAliados brands={brands} />
                <section className='flex flex-col w-full gap-4 md:gap-0'>
                    {infoSections.map((section) => (
                        <InfoSection key={section.title[language]} {...section} />
                    ))}
                </section>
            </section>
        </div>
    )
}
