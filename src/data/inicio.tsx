import attackPro from "../assets/inicio/brands/attackPro.png";
import caf from "../assets/inicio/brands/caf.png";
import iica from "../assets/inicio/brands/iica.svg";
import cni from "../assets/inicio/brands/cni.png";
import pacto from "../assets/inicio/brands/pactoGlobal.png";
import nosotros from "../assets/inicio/sections/nosotros.jpg";
import uab from "../assets/inicio/brands/uab.png";
import catalyste from "../assets/inicio/brands/catalyste.png";
import { InfoSectionProps } from "../components/inicio/InfoSection";
import { Facebook, Instagram, Linkedin } from "iconoir-react";
import whatsapp from "../assets/inicio/icons/whatsapp.svg"
import Contacts from "../components/shared/Contacts";

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
        src: uab,
        name: 'Universidad Autónoma del Beni José Ballivián',
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
        src: pacto,
        name: "Pacto Global Red Bolivia",
    },
    {
        src: catalyste,
        name: "Catalyste",
    }
];

export const redesSociales = [
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
        href: "https://www.linkedin.com/company/fundacionflades/",
        icon: <Linkedin color="#0A66C2" />,
    },
];

export const ourAlliesTitle = {
    en: "Our Allies",
    es: "Nuestros Aliados",
};

//Avoid using same titles for different sections
export const infoSections: InfoSectionProps[] = [
    {
        index: 0,
        title: {
            en: "Home",
            es: "Inicio"
        },
        description:
        {
            en: "We work to empower vulnerable areas, seeking self-sustainability in Bolivia",
            es: "Trabajamos para empoderar áreas vulnerables, buscando la autosostenibilidad en Bolivia"
        },
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
        link: "/",
    },
    {
        index: 1,
        imgSrc: nosotros,
        imgTitle: {
            en: "About Us",
            es: "Nosotros",
        },
        title: {
            en: "About Us",
            es: "Nosotros",
        },
        description: {
            en: "Together for a more self-sustainable Bolivia",
            es: "Juntos por una Bolivia más autosostenible",
        },
        link: "/nosotros",
    },
    {
        index: 2,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/1H5A4485_edited.jpg",
        imgTitle: {
            en: "Projects",
            es: "Proyectos",
        },
        title: {
            en: "Projects",
            es: "Proyectos",
        },
        description: {
            en: "Empowering Bolivians",
            es: "Empoderando a los bolivianos"
        },
        link: "/proyectos",
    },
    {
        index: 3,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/DJI_0604_edited-1.jpg",
        imgTitle: {
            en: "Chiquitanía",
            es: "Chiquitanía",
        },
        title: {
            en: "Chiquitanía",
            es: "Chiquitanía",
        },
        description:
        {
            en: "Don't let the jungle run out of music",
            es: "Que la selva no se quede sin música"
        },
        link: "/chiquitania",
    },
    {
        index: 4,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/2.jpg",
        imgTitle: {
            en: "Compliance",
            es: "Cumplimiento",
        },
        title: {
            en: "Compliance",
            es: "Cumplimiento",
        },
        description: {
            en: "Transparency in our activities and resource management is a fundamental pillar to continue growing and supporting more people in need",
            es: "La transparencia en nuestras actividades y manejo de recursos es un pilar fundamental para continuar creciendo y apoyar cada vez a más personas que necesiten ayuda",
        },
        link: "/compliance",
    },
    {
        index: 5,
        imgSrc: "https://fundacionflades.org/wp-content/uploads/2022/05/Untitled-1-1.jpg",
        imgTitle: {
            en: "Contact",
            es: "Contacto",
        },
        title: {
            en: "Contact",
            es: "Contacto",
        },
        description: {
            en: "Our address is Calle Quenallata Nº 10, between 14 and 15 of Achumani. La Paz, Bolivia",
            es: "Nuestra dirección es Calle Quenallata Nº 10, entre 14 y 15 de Achumani. La Paz, Bolivia",
        },
        button: false,
        customContent: (
            <Contacts />
        )
    },
];
