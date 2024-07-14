import { createLazyFileRoute } from '@tanstack/react-router'
import useLanguage from '../../hooks/useLanguage';
import { IconoirProvider } from 'iconoir-react';
import PageBanner from '../../components/shared/PageBanner';
import { projectsSlider, proyectosContent } from '../../data/proyectos';
import { clsx } from 'clsx';
import InfoBox from '../../components/shared/InfoBox';
import { useRef } from 'react';
import UpArrow from '../../components/shared/UpArrow';

export const Route = createLazyFileRoute('/proyectos/')({
  component: () => <Proyectos />,
})

const { slogan, content } = proyectosContent;
const { events, projects, studies, trainings, workshops } = content;

function Proyectos() {
  const { language } = useLanguage()
  const buttonsRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex flex-col gap-10 pb-10'>
      <UpArrow buttonsRef={buttonsRef} isBigger />
      <PageBanner slides={projectsSlider} content={slogan.content[language]} title={slogan.title[language]}>
      </PageBanner>
      <section id='buttons' ref={buttonsRef} className='flex flex-col gap-4 items-center'>
        <div className='grid gap-8 w-[80%] lg:w-[800px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  '>
          {
            [events, projects, studies, trainings, workshops].map((category) => (
              <button
                onClick={() => {
                  const element = document.getElementById(category.title[language])
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                key={`button-${category.title[language]}`}
                className='shadow-md rounded-md flex gap-3 items-center'
              >
                <span style={{
                  backgroundColor: category.color,
                }} className={clsx(`w-[20px] h-full rounded-l-md`)}></span>
                <p className='py-4 text-xl font-semibold flex items-center gap-2 justify-between w-full pr-2'>
                  {category.title[language]}
                  <IconoirProvider iconProps={{
                    color: category.color,
                  }}>
                    {category.icon}
                  </IconoirProvider>
                </p>
              </button>

            ))
          }
        </div>
      </section>
      <InfoBox
        id={events.title[language]}
        title={events.cices.title[language]}
        color={events.color}
        items={events.cices.events.map((event) => {
          return {
            es: `${event.title['es']}, ${event.date['es']}, ${event.location}`,
            en: `${event.title['en']}, ${event.date['en']}, ${event.location}`
          }
        })}
        icon={events.icon}
        secondTitle={events.ape.title[language]}
        secondItems={events.ape.events.map((event) => {
          return {
            es: `${event.title['es']}, ${event.date['es']}, ${event.location}`,
            en: `${event.title['en']}, ${event.date['en']}, ${event.location}`
          }
        })}
      />
      <InfoBox id={projects.title[language]} title={projects.title[language]} color={projects.color} items={projects.items} icon={projects.icon} />
      <InfoBox id={studies.title[language]} title={studies.title[language]} color={studies.color} items={studies.items} icon={studies.icon} />
      <InfoBox id={trainings.title[language]} title={trainings.title[language]} color={trainings.color} items={trainings.cities} icon={trainings.icon} />
      <InfoBox id={workshops.title[language]}
        title={workshops.carried.title[language]}
        color={workshops.color}
        items={workshops.carried.workshops}
        icon={workshops.icon}
        secondTitle={workshops.held.title[language]}
        secondItems={workshops.held.workshops} />
    </div >
  )
}