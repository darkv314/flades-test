import { brands } from "../../data/inicio";

/**
 * An animated logo carousel to show companies using tRPC. Tailwind code taken from Cruip
 * @link https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
 */

const animationRow = Array(2).fill(0) as [number, number];

function NuestrosAliados() {
    return (
        <div className='inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            {animationRow.map((_, index) => (
                <ul
                    key={`animationRow${index}`}
                    className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                    aria-hidden={index > 0}
                >
                    {brands.map((brand) => (
                        <li key={brand.src}>
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="max-h-10 md:max-h-14 dark:invert"
                            />
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export default NuestrosAliados
