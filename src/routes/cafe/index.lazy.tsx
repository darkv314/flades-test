import { createLazyFileRoute } from '@tanstack/react-router'
import PageBanner from '../../components/shared/PageBanner'
import { cafeSlider, cafeContent } from '../../data/cafe'
import useLanguage from '../../hooks/useLanguage';
import ContentSection from '../../components/shared/ContentSection';
import { useRef } from 'react';
import UpArrow from '../../components/shared/UpArrow';

export const Route = createLazyFileRoute('/cafe/')({
  component: () => <Cafe />,
})

const { slogan, content } = cafeContent;

function Cafe() {
  const { language } = useLanguage()
  const inicioRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <UpArrow buttonsRef={inicioRef} />
      <PageBanner title={slogan.title[language]} content={slogan.content[language]} slides={cafeSlider} />
      <div ref={inicioRef}>
        {
          content.map((item, index) => {
            return <ContentSection wave={index !== 0} color={item.color} key={`section-cafe${index}`} start={index} contents={[{
              content: item[language],
              imgSrc: item.img,
              imgAlt: cafeSlider[index].alt
            }]} />
          })
        }
      </div>
    </div>
  )
}