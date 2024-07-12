import { createLazyFileRoute } from '@tanstack/react-router'
import PageBanner from '../../components/shared/PageBanner'
import { complianceSlider, complianceContent } from '../../data/compliance'
import useLanguage from '../../hooks/useLanguage';
import ContentSection from '../../components/shared/ContentSection';

export const Route = createLazyFileRoute('/compliance/')({
  component: () => <Compliance />
})

const { slogan, main, items } = complianceContent;

function Compliance() {
  const { language } = useLanguage();
  return (
    <div>
      <PageBanner title={slogan.title[language]} content={slogan.content[language]} slides={complianceSlider}>
        <section className='flex flex-col max-w-[60ch] items-center gap-4'>
          <h2 className='text-2xl md:text-4xl font-bold'>
            {main.title[language]}
          </h2>
          <p className='text-center text-md md:text-xl'>
            {main.content[language]}
          </p>
        </section>
      </PageBanner>
      {
        items.map((item, index) => (
          <ContentSection
            key={`section-${index}`}
            wave={index % 2 !== 0}
            start={index}
            title={item.title[language]}
            color={item?.color}
            contents={[
              {
                title: item.title[language],
                content: item.content[language],
                imgSrc: complianceSlider[index % 2].src,
                imgAlt: complianceSlider[index % 2].alt
              }
            ]}>
            <ul className='pl-6 flex flex-col gap-4 text-xl list-disc'>
              {item?.pillars?.map((pillar, index) => (
                <li key={`pillar-${index
                  }`}>
                  <p>
                    {
                      pillar[language]
                    }
                  </p>
                </li>
              ))}
            </ul>
          </ContentSection>
        ))
      }
    </div>
  )
}