import useEmblaCarousel from "embla-carousel-react"
import Fade from 'embla-carousel-fade'
import { useEffect } from "react"

type FadeImageSliderProps = {
    slides: { src: string, alt: string }[]
}

function FadeImageSlider({ slides }: FadeImageSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [Fade()])

    useEffect(() => {
        if (emblaApi) {
            setInterval(() => {
                emblaApi.scrollNext()
            }, 5000)
        }
    }, [emblaApi])

    return (
        <div className="embla min-h-[50svh] md:min-h-[100svh] w-full absolute">
            <div className="embla__viewport h-full" ref={emblaRef}>
                <div className="embla__container h-full">
                    {slides.map((slide) => (
                        <div className="embla__slide" key={slide.alt}>
                            <img
                                className="size-full object-cover"
                                src={slide.src}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FadeImageSlider
