import attackPro from "../assets/inicio/brands/attackPro.png";
import caf from "../assets/inicio/brands/caf.png";
import bago from "../assets/inicio/brands/bago.png";
import solydes from "../assets/inicio/brands/solydes.png";
import giz from "../assets/inicio/brands/giz.png";
import bancoUnion from "../assets/inicio/brands/bancounion.png";
import iica from "../assets/inicio/brands/iica.svg";
import cni from "../assets/inicio/brands/cni.png";
import bancoFie from "../assets/inicio/brands/bancoFie.png";
import pacto from "../assets/inicio/brands/pactoGlobal.png";
import nosotros from "../assets/inicio/sections/nosotros.jpg";
import { InfoSectionProps } from "../components/inicio/InfoSection";
import { Facebook, IconoirProvider, Instagram, Linkedin } from "iconoir-react";
import whatsapp from "../assets/inicio/icons/whatsapp.svg"

export const brands = [
    {
        src: attackPro,
        name: "Attack Pro",
    },
    {
        src: caf,
        name: "Banco de Desarrollo de América Latina",
    },
    {
        src: bago,
        name: "Bagó",
    },
    {
        src: solydes,
        name: "Fundación Solydes",
    },
    {
        src: giz,
        name: "Giz Deustche Gesellschaft für Internationale Zusammenarbeit",
    },
    {
        src: bancoUnion,
        name: "Banco Unión",
    },
    {
        src: iica,
        name: "IICA",
    },
    {
        src: cni,
        name: "Cámara Nacional de Industrias",
    },
    {
        src: bancoFie,
        name: "Banco FIE",
    },
    {
        src: pacto,
        name: "Pacto Global Red Bolivia",
    },
];

const redesSociales = [
    {
        key: "instagram",
        href: "https://www.instagram.com/fundacionflades/",
        icon: <Instagram color="#E1306C" />,
    },
    {
        key: "facebook",
        href: "https://www.facebook.com/FUNDACIONFLADES",
        icon: <Facebook color="#1877F2" />,
    },
    {
        key: "whatsapp",
        href: "https://wa.me/59177579157",
        icon: <img className="size-[2.5rem]" src={whatsapp} alt="Whatsapp" />,
    },
    {
        key: "linkedin",
        href: "https://www.facebook.com/FUNDACIONFLADES",
        icon: <Linkedin color="#0A66C2" />,
    },
];

//Avoid using same titles for different sections
export const infoSections: InfoSectionProps[] = [
    {
        index: 0,
        title: "Inicio",
        description:
            "Trabajamos para empoderar áreas vulnerables, buscando la autosostenibilidad en Bolivia",
        button: false,
        slider: true,
        gallery: [
            {
                src: "https://fundacionflades.org/wp-content/uploads/2022/05/1H5A4749_edited.jpg",
                alt: "Inicio 1",
            },
            {
                src: "https://fundacionflades.org/wp-content/uploads/2022/05/619A0806_edited_edited.jpg",
                alt: "Inicio 2",
            },
            {
                src: "https://fundacionflades.org/wp-content/uploads/2022/05/Imagen-217-1.jpg",
                alt: "Inicio 3",
            },
            {
                src: "https://fundacionflades.org/wp-content/uploads/2022/05/IMG_0884_edited_edited-1.jpg",
                alt: "Inicio 4",
            },
            {
                src: "https://fundacionflades.org/wp-content/uploads/2022/05/IMG_4302_edited_edited-2.jpg",
                alt: "Inicio 5",
            },
        ],
    },
    {
        index: 1,
        imgSrc: nosotros,
        imgTitle: "Nosotros",
        title: "Nosotros",
        description: "Juntos por una Bolivia más autosostenible",
    },
    {
        index: 2,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/1H5A4485_edited.jpg",
        imgTitle: "Proyectos",
        title: "Proyectos",
        description: "Empoderando a los bolivianos",
    },
    {
        index: 3,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/DJI_0604_edited-1.jpg",
        imgTitle: "Chiquitanía",
        title: "Chiquitanía",
        description: "Que la selva no se quede sin música",
    },
    {
        index: 4,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/2.jpg",
        imgTitle: "Cumplimiento",
        title: "Cumplimiento",
        description:
            "La transparencia en nuestras actividades y manejo de recursos es un pilar fundamental para continuar creciendo y apoyar cada vez a más personas que necesiten ayuda",
    },
    {
        index: 5,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/Untitled-1-1.jpg",
        imgTitle: "Contacto",
        title: "Contacto",
        description:
            "Nuestra dirección Calle Quenallata Nº 10, entre 14 y 15 de Achumani. La Paz, Bolivia",
        button: false,
        customContent: (
            <div className="flex flex-col gap-4">
                <p>Email: <span>info@fundacionflades.org</span></p>
                <p>Llámanos: +591(2) 2776191</p>
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
    },
];
