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
                alt: "Placeholder 1",
            },
            {
                src: "https://fundacionflades.org/wp-content/uploads/2022/05/619A0806_edited_edited.jpg",
                alt: "Placeholder 2",
            },
            {
                src: "https://fundacionflades.org/wp-content/uploads/2022/05/Imagen-217-1.jpg",
                alt: "Placeholder 3",
            },
        ],
    },
    {
        index: 1,
        imgSrc: nosotros,
        imgTitle: "Nosotros",
        title: "Nosotros",
        description: "Juntos por una Bolivia más autosostenible",
        button: true,
    },
    {
        index: 2,
        imgSrc: nosotros,
        imgTitle: "Nosotros",
        title: "Nosotros",
        description: "Juntos por una Bolivia más autosostenible",
        button: false,
    },
];
