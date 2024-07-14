import { createLazyFileRoute } from '@tanstack/react-router'
import PageBanner from '../../components/shared/PageBanner'
import { cafeSlider, cafeContent } from '../../data/cafe'
import useLanguage from '../../hooks/useLanguage';
import ContentSection from '../../components/shared/ContentSection';

export const Route = createLazyFileRoute('/cafe/')({
  component: () => <Cafe />,
})

const { slogan, content } = cafeContent;

function Cafe() {
  const { language } = useLanguage()
  return (
    <div>
      <PageBanner title={slogan.title[language]} content={slogan.content[language]} slides={cafeSlider} />
      {
        content.map((item, index) => {
          return <ContentSection wave={index !== 0} color={item.color} key={`section-cafe${index}`} start={index} contents={[{
            content: item[language],
            imgSrc: cafeSlider[index].src,
            imgAlt: cafeSlider[index].alt
          }]} />
        })
      }
    </div>
  )
}