import { createLazyFileRoute } from '@tanstack/react-router'
import NuestrosAliados from '../components/inicio/NuestrosAliados';
import { infoSections } from '../data/inicio';
import InfoSection from '../components/inicio/InfoSection';

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div>
            <section className='flex flex-col items-center gap-4'>
                <h2 className='text-xl font-semibold'>Nuestros Aliados</h2>
                <NuestrosAliados />
                <section className='flex flex-col w-full gap-4 md:gap-0'>
                    {infoSections.map((section) => (
                        <InfoSection key={section.title} {...section} />
                    ))}
                </section>
            </section>
        </div>
    )
}
