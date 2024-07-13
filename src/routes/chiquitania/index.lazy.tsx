import { createLazyFileRoute } from '@tanstack/react-router'
import PageBanner from '../../components/shared/PageBanner'
import { chiquitaniaSlider, chuquitaniaContent } from '../../data/chiquitania'
import useLanguage from '../../hooks/useLanguage'
import ContentSection from '../../components/shared/ContentSection'
import { useRef } from 'react'
import UpArrow from '../../components/shared/UpArrow'

export const Route = createLazyFileRoute('/chiquitania/')({
  component: () => <Chiquitania />
})

const { slogan, content } = chuquitaniaContent
const { artSchools, environment, main, research, tourism } = content
const iterableSections = [artSchools, environment, research]

function Chiquitania() {
  const { language } = useLanguage();
  const inicioRef = useRef<HTMLDivElement>(null);
  return (
    <div className='flex flex-col'>
      <UpArrow buttonsRef={inicioRef} />
      <PageBanner slides={chiquitaniaSlider} content={slogan.content[language]} title={slogan.title[language]} />
      <div ref={inicioRef} className='flex flex-col'>
        <ContentSection start={0} contents={[{
          title: main.title[language],
          content: main.content[language],
          imgSrc: main.img.src,
          imgAlt: main.img.alt
        }]} />
        {
          iterableSections.map((section, index) => {
            const prevLength = index === 0 ? 0 : iterableSections[index - 1].items.length
            return (
              <ContentSection wave color={section.color} start={prevLength % 2 + 1} key={section.title[language]} title={section.title[language]} contents={section.items.map((content) => ({
                title: content.title[language],
                content: content.content[language],
                imgSrc: content.img.src,
                imgAlt: content.img.alt
              }))} />
            )
          })
        }
        <ContentSection wave color={tourism.color} start={0} contents={[{
          title: tourism.title[language],
          content: tourism.content[language],
          imgSrc: tourism.img.src,
          imgAlt: tourism.img.alt
        }]} />
      </div>
    </div>
  )
}