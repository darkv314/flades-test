import { createLazyFileRoute } from '@tanstack/react-router'
import PageBanner from '../../components/shared/PageBanner'
import { chiquitaniaSlider, chuquitaniaContent } from '../../data/chiquitania'
import useLanguage from '../../hooks/useLanguage'
import chiquitania from "../../assets/chiquitania/chiquitania.jpg"
import ContentSection from '../../components/shared/ContentSection'

export const Route = createLazyFileRoute('/chiquitania/')({
  component: () => <Chiquitania />
})

const { slogan, content } = chuquitaniaContent
const { artSchools, environment, main, research, tourism } = content
const iterableSections = [artSchools, environment, research]

function Chiquitania() {
  const { language } = useLanguage();
  return (
    <div className='flex flex-col gap-10 pb-10'>
      <PageBanner slides={chiquitaniaSlider} content={slogan.content[language]} title={slogan.title[language]} />
      <ContentSection start={0} contents={[{
        title: main.title[language],
        content: main.content[language],
        imgSrc: chiquitania,
        imgAlt: main.title[language]
      }]} />
      {
        iterableSections.map((section, index) => {
          const prevLength = index === 0 ? 0 : iterableSections[index - 1].items.length
          return (
            <ContentSection start={prevLength % 2 + 1} key={section.title[language]} title={section.title[language]} contents={section.items.map((content) => ({
              title: content.title[language],
              content: content.content[language],
              imgSrc: chiquitania,
              imgAlt: "chiquitania"
            }))} />
          )
        })
      }
    </div>
  )
}