import { createLazyFileRoute } from '@tanstack/react-router'
import FadeImageSlider from '../../components/shared/FadeImageSlider'
import { nosotrosContent, nosotrosSlider } from '../../data/nosotros'
import useLanguage from '../../hooks/useLanguage'
import misionVision from "../../assets/nosotros/nosotros8.jpg"
import clsx from 'clsx'
import { IconoirProvider, Leaf } from 'iconoir-react'

export const Route = createLazyFileRoute('/nosotros/')({
  component: () => <Nosotros />,
})

const { title, content, slogan } = nosotrosContent;

function Nosotros() {
  const { language } = useLanguage()

  return (
    <div className='flex flex-col gap-10 pb-10'>
      <section className='relative'>
        <FadeImageSlider slides={nosotrosSlider} />
        <div className={clsx(`h-[100svh] backdrop-blur-[2px] px-8 bg-blur flex flex-col items-center justify-center text-white gap-4 lg:gap-12 relative z-10`)}>
          <section className='flex flex-col text-center max-w-[60ch] items-center gap-4'>
            <h1 className='text-6xl font-bold'>{slogan.title}</h1>
            <p className='text-xl'>{slogan.content[language]}</p>
          </section>
          <section className='flex flex-col max-w-[60ch] items-center gap-4'>
            <h2 className='text-4xl font-bold'>
              {title[language]}
            </h2>
            <p className='text-center text-xl'>
              {title.content.description[language]}
            </p>
          </section>
        </div>
      </section>


      <section className='p-4 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 justify-center'>
        <section className='p-4 flex flex-col gap-16 max-w-[55ch] md:max-w-[75ch] lg:max-w-[60ch]'>
          <section className='flex flex-col gap-4 '>
            <h2 className='text-4xl font-bold '>
              {content.vision.title[language]}
            </h2>
            <p className='text-xl leading-8'>
              {content.vision[language]}
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-4xl font-bold'>
              {content.mision.title[language]}
            </h2>
            <p className='text-xl leading-8'>
              {content.mision[language]}
            </p>
          </section>
        </section>
        <img className='h-[500px] rounded-lg w-[90%] md:w-[80%] lg:w-[40%] object-cover' src={misionVision} alt="" />
      </section>

      <section className='grid w-full place-items-center'>
        <div className='bg-[#8de499] p-8 border-2 rounded-lg border-black max-w-[80%] gap-8 grid place-items-center'>
          <h2 className='text-4xl font-bold'>{content.metas.title[language]}</h2>
          <ul className='list-none list-inside grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {content.metas.goals.map((meta, index) => (
              <li key={index} className='text-pretty grid grid-cols-[auto_1fr] gap-4'>
                <IconoirProvider>
                  <Leaf />
                </IconoirProvider>
                <p>{meta[language]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}