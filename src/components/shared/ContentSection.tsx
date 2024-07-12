import { clsx } from "clsx"

type InfoSectionProps = {
    title?: string
    start: number
    contents: {
        title: string
        content: string
        imgSrc: string
        imgAlt: string
    }[]
}

function ContentSection({ title, contents, start }: InfoSectionProps) {
    return (
        <section className='flex flex-col items-center gap-8'>
            {title && <h2 className="text-4xl font-bold">{title}</h2>}
            {contents.map((content, index) => (
                <section key={`section-${content.title}`} className={clsx(((index + start) % 2) !== 0 && "lg:flex-row-reverse", `p-4 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 justify-center`)}>
                    <section className='flex gap-8 p-4 max-w-[55ch] md:max-w-[75ch] lg:max-w-[60ch]'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-4xl font-bold'>{content.title}</h3>
                            <p className='text-xl leading-8 max-h-[400px] overflow-y-auto'>{content.content}</p>
                        </div>
                    </section>
                    <img className='h-[500px] rounded-lg w-[90%] md:w-[80%] lg:w-[40%] object-cover' src={content.imgSrc} alt={content.imgAlt} />
                </section>
            ))}

        </section>
    )
}

export default ContentSection
