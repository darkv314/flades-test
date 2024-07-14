import { IconoirProvider } from 'iconoir-react'
import { redesSociales } from '../../data/inicio'
import useLanguage from '../../hooks/useLanguage';

function Contacts() {
    const { language } = useLanguage();

    return (
        <div className="flex flex-col gap-4">
            <p>Email: <span>info@fundacionflades.org</span></p>
            <p>{language === 'es' ? 'Llámanos' : "Call us"}: +591(2) 2776191</p>
            <p>Whatsapp: +591 77579157</p>
            <span className="flex gap-2">
                {
                    redesSociales.map((red) => (
                        <a key={red.key} href={red.href} className="font-bold">
                            <IconoirProvider iconProps={
                                {
                                    fontWeight: "bold",
                                    width: "2.5rem",
                                    height: "2.5rem",
                                }
                            }>
                                {red.icon}
                            </IconoirProvider>
                        </a>
                    ))
                }
            </span>
        </div>
    )
}

export default Contacts
