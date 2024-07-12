import { createLazyFileRoute } from '@tanstack/react-router'
import FadeImageSlider from '../../components/shared/FadeImageSlider'
import { nosotrosContent, nosotrosSlider } from '../../data/nosotros'
import useLanguage from '../../hooks/useLanguage'

export const Route = createLazyFileRoute('/nosotros/')({
  component: () => <Nosotros />,
})

const { title, content, slogan } = nosotrosContent;

const height = 50

function Nosotros() {
  const { language } = useLanguage()

  return (
    <div className='relative'>
      <FadeImageSlider height={height} slides={nosotrosSlider} />
      <div className={`px-4 backdrop-blur-[2px] bg-blur flex flex-col items-center justify-center text-white gap-8 relative z-10 h-[${height}svh]`}>
        <section className='flex flex-col max-w-[60ch] items-center'>
          <h1 className='text-4xl font-bold'>{slogan.title}</h1>
          <p>{slogan.content[language]}</p>
        </section>
        <section className='flex flex-col max-w-[60ch] items-center'>
          <h2 className='text-2xl font-bold'>
            {title[language]}
          </h2>
          <p className='text-center'>
            {title.content.description[language]}
          </p>
        </section>
      </div>

      <div className='p-4 flex flex-col'>
        <section className='grid grid-cols-2 gap-4'>
          <section className='flex flex-col gap-4 items-center'>
            <h2 className='text-2xl font-bold '>
              {content.vision.title[language]}
            </h2>
            <p className='text-lg font-bold'>
              {content.vision[language]}
            </p>
            {/* <p className='text-pretty'>
            {content.mision[language]}
          </p>
          <ul className='list-disc list-inside'>
            {content.metas.goals.map((meta, index) => (
              <li key={index} className='text-pretty'>
                {meta[language]}
              </li>
            ))}
          </ul> */}
          </section>
          <section className='flex flex-col gap-4 items-center'>
            <h2 className='text-2xl font-bold'>
              {content.vision.title[language]}
            </h2>
            <p className='text-lg font-bold'>
              {content.vision[language]}
            </p>
          </section>
        </section>

      </div>
    </div>
  )
}