import { ReactNode } from "@tanstack/react-router"
import { clsx } from "clsx"

type InfoSectionProps = {
    wave?: boolean
    title?: string
    start: number
    color?: string
    children?: ReactNode
    contents: {
        title: string
        content: string
        imgSrc: string
        imgAlt: string
    }[]
}

function ContentSection({ title, contents, start, color = "white", wave = false, children }: InfoSectionProps) {
    return (
        <section style={{
            backgroundColor: color
        }} className={clsx('flex flex-col gap-8 items-center relative py-20', color !== "white" && "text-white")}>
            {title && <h2 className="text-4xl font-bold text-center px-2">{title}</h2>}
            {contents.map((content, index) => (
                <section key={`section-${content.title}`} className={clsx(((index + start) % 2) !== 0 && "lg:flex-row-reverse", `p-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 justify-center`)}>
                    <section className='flex gap-8 p-4 max-w-[55ch] md:max-w-[75ch] lg:max-w-[60ch]'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-4xl font-bold'>{content.title}</h3>
                            <span className='flex flex-col gap-4 max-h-[400px] overflow-y-auto'>
                                <p className='px-1 text-xl leading-8'>{content.content}</p>
                                {children}
                            </span>
                        </div>
                    </section>
                    <img className='h-[500px] rounded-lg w-[90%] md:w-[80%] lg:w-[40%] object-cover' src={content.imgSrc} alt={content.imgAlt} />
                </section>
            ))}
            {
                wave && <div className="wave z-10">
                    <svg style={{
                        fill: color
                    }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            }
        </section>
    )
}

export default ContentSection
