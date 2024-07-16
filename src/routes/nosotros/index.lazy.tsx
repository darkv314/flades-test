import { createLazyFileRoute } from '@tanstack/react-router'
import { nosotrosContent, nosotrosSlider } from '../../data/nosotros'
import useLanguage from '../../hooks/useLanguage'
import misionVision from "../../assets/nosotros/nosotros8.jpg"
import { Leaf } from 'iconoir-react'
import PageBanner from '../../components/shared/PageBanner'
import InfoBox from '../../components/shared/InfoBox'

export const Route = createLazyFileRoute('/nosotros/')({
  component: () => <Nosotros />,
})

const { title, content, slogan } = nosotrosContent;

function Nosotros() {
  const { language } = useLanguage()

  return (
    <div className='flex flex-col gap-10 pb-10'>
      <PageBanner slides={nosotrosSlider} content={slogan.content[language]} title={slogan.title[language]}>
        <section className='flex flex-col max-w-[60ch] items-center gap-4'>
          <h2 className='text-2xl md:text-4xl font-bold'>
            {title[language]}
          </h2>
          <p className='text-center text-md md:text-xl'>
            {title.content.description[language]}
          </p>
        </section>
      </PageBanner>

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
      <InfoBox id='goals' textColor title={content.metas.title[language]} color='#12552B' items={content.metas.goals} icon={<Leaf />} />
    </div>
  )
}