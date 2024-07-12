import { BookStack, Community, DesignPencil, Learning, PasteClipboard } from "iconoir-react"
import cafe from "../assets/proyectos/cafe.jpg"
import chiquitania from "../assets/proyectos/chiquitania.jpg"
import flades from "../assets/proyectos/flades.jpg"
import leiner from "../assets/proyectos/leiner.jpg"
import montanha from "../assets/proyectos/montaña.jpg"
import vainilla from "../assets/proyectos/vainilla.jpg"

export const projectsSlider = [
    {
        src: cafe,
        alt: "Cafe"
    },
    {
        src: chiquitania,
        alt: "Chiquitania"
    },
    {
        src: flades,
        alt: "Flades"
    },
    {
        src: leiner,
        alt: "Leiner"
    },
    {
        src: montanha,
        alt: "Montaña"
    },
    {
        src: vainilla,
        alt: "Vainilla"
    }
]

export const proyectosContent = {
    slogan: {
        title: {
            es: 'Proyectos',
            en: 'Projects',
        },
        content: {
            en: "Empowering Bolivians",
            es: "Empoderando a los Bolivianos"
        }
    },
    content: {
        projects: {
            icon: <PasteClipboard />,
            color: "#67C47C",
            title: {
                en: "Projects",
                es: "Proyectos"
            },
            cities: [
                "Santa Cruz",
                "Oruro",
                "Cochabamba",
                "Chuquisaca",
                "Potosí",
                "Tarija",
            ],
            items: [
                {
                    en: "Soil recovery and conservation",
                    es: "Recuperación y conservación del suelo"

                },
                {
                    en: "Organic matter recovery",
                    es: "Recuperación de materia orgánica"

                },
                {
                    en: "Adoption of good practices for the efficient use of water",
                    es: "Adopción de buenas prácticas para el uso eficiente del agua"

                },
                {
                    en: "Adoption of productivity improvement",
                    es: "Adopción de mejoras de productividad"

                },
                {
                    en: "Technology transfer to increase production and good use of the soil",
                    es: "Transferencia de tecnología para aumentar la producción y buen uso del suelo"

                },
                {
                    en: "Territorial integration based on sustainable productive development",
                    es: "Integración territorial basada en el desarrollo productivo sostenible"

                },
                {
                    en: "Environmental impact remediation, Warnes Santa Cruz highway",
                    es: "Remediación de impacto ambiental, carretera Warnes Santa Cruz"

                },
                {
                    en: "New technology enhancers",
                    es: "Nuevos potenciadores de tecnología"

                },
                {
                    en: "Communication campaign developed by the coordination secretariat of the national council against illicit drug trafficking (SC-CONALTID) 'decides to prevent'",
                    es: "Campaña de comunicación desarrollada por la secretaría de coordinación del consejo nacional contra el tráfico ilícito de drogas (SC-CONALTID) 'decide prevenir'"

                }
            ],
        },
        studies: {
            icon: <BookStack />,
            color: "#FFC857",
            title: {
                en: "Studies",
                es: "Estudios"
            },
            items: [
                {
                    en: "Study and implementation for the transfer of technology to increase production and good use of the soil.",
                    es: "Estudio e implementación para la transferencia de tecnología para aumentar la producción y buen uso del suelo."
                },
                {
                    en: "Study for national connectivity.",
                    es: "Estudio para la conectividad nacional."
                },
                {
                    en: "Environmental impact study, Warnes Santa Cruz highway.",
                    es: "Estudio de impacto ambiental, carretera Warnes Santa Cruz."
                },
                {
                    en: "I study local development processes of shared responsibility.",
                    es: "Estudio de procesos de desarrollo local de responsabilidad compartida."
                },
                {
                    en: "Finlades Pedagogical System Study.",
                    es: "Estudio del Sistema Pedagógico Finlades."
                },
                {
                    en: "I study proposals for the new school curriculum in centers of high population density.",
                    es: "Estudio de propuestas para el nuevo currículo escolar en centros de alta densidad poblacional."
                },
                {
                    en: "Study Proposal for new university careers.",
                    es: "Estudio Propuesta de nuevas carreras universitarias."
                },
            ],
        },
        workshops: {
            icon: <DesignPencil />,
            color: "#ec6c9b",
            title: {
                en: "Workshops",
                es: "Talleres"
            },
            carried: {
                title: {
                    en: "Workshops carried out FLADES in conjunction with CICES",
                    es: "Talleres realizados de FLADES en conjunto con CICES"
                },
                workshops: [
                    {
                        en: "“The Journalistic Genres” – Miguel Ángel Bastenier",
                        es: "“Los Géneros Periodísticos” – Miguel Ángel Bastenier"
                    }
                ]
            },
            held: {
                title: {
                    en: "Workshops held FLADES with the Foundation for a New Ibero-American Journalism",
                    es: "Talleres realizados de FLADES con la Fundación para un Nuevo Periodismo Iberoamericano"
                },
                workshops: [
                    {
                        en: "“La Paz, Bolivia, July 1-4, 1998",
                        es: "“La Paz, Bolivia, 1-4 de julio de 1998”"
                    },
                    {
                        en: "“Journalistic Ethics” – Javier Darío Restrepo",
                        es: "“Ética Periodística” – Javier Darío Restrepo"
                    },
                    {
                        en: "Santa Cruz de la Sierra, Bolivia, November 16 and 17, 1998.",
                        es: "Santa Cruz de la Sierra, Bolivia, 16 y 17 de noviembre de 1998."
                    },
                    {
                        en: "“Advanced Investigative Journalism” – Ignacio Gómez and Ana Arana.",
                        es: "“Periodismo de Investigación Avanzado” – Ignacio Gómez y Ana Arana."
                    },
                    {
                        en: "La Paz, Bolivia, November 24-28, 1998.",
                        es: "La Paz, Bolivia, 24-28 de noviembre de 1998."
                    },
                    {
                        en: "“Measurement of Media Consumption as a Source of Business”–Bernardo Díaz Nosty La Paz, Bolivia, March 29, 1999.",
                        es: "“Medición del Consumo de Medios como Fuente de Negocio”–Bernardo Díaz Nosty La Paz, Bolivia, 29 de marzo de 1999."
                    }
                ]
            }
        },
        trainings: {
            icon: <Learning />,
            color: "#FF9D6B",
            title: {
                en: "Trainings",
                es: "Capacitaciones"
            },
            cities: [
                {
                    en: "Santa Cruz",
                    es: "Santa Cruz"
                },
                {
                    en: "Oruro",
                    es: "Oruro"
                },
                {
                    en: "Cochabamba",
                    es: "Cochabamba"
                },
                {
                    en: "Chuquisaca",
                    es: "Chuquisaca"
                },
                {
                    en: "Potosí",
                    es: "Potosí"
                },
                {
                    en: "Tarija",
                    es: "Tarija"
                }
            ]
        },
        events: {
            icon: <Community />,
            color: "#7FB5DE",
            title: {
                en: "Events",
                es: "Eventos"
            },
            cices: {
                title: {
                    en: "Events organized by FLADES in conjunction with CICES",
                    es: "Eventos organizados por FLADES en conjunto con CICES"
                },
                events: [
                    {
                        title: {
                            en: "First Meeting of Social Communication Media in Latin America.",
                            es: "Primer Encuentro de Medios de Comunicación Social en América Latina."
                        },
                        location: "Panama",
                        date: {
                            en: "September 17-18, 1994",
                            es: "17-18 de septiembre de 1994"
                        }
                    },
                    {
                        title: {
                            en: "International Seminar 'Communication and New Political Reality'",
                            es: "Seminario Internacional 'Comunicación y Nueva Realidad Política'"
                        },
                        location: "San Jose, Costa Rica",
                        date: {
                            en: "January 12-14, 1995",
                            es: "12-14 de enero de 1995"
                        }
                    },
                    {
                        title: {
                            en: "International Seminar 'The New Ibero-American Reality'",
                            es: "Seminario Internacional 'La Nueva Realidad Iberoamericana'"
                        },
                        location: "Lima Peru",
                        date: {
                            en: "March 1995",
                            es: "Marzo de 1995"
                        }
                    },
                    {
                        title: {
                            en: "Ibero-American Forum 'The Themes of the New Millennium'",
                            es: "Foro Iberoamericano 'Los Temas del Nuevo Milenio'"
                        },
                        location: "La Paz, Bolivia",
                        date: {
                            en: "June 11 and 12, 1995",
                            es: "11 y 12 de junio de 1995"
                        }
                    },
                    {
                        title: {
                            en: "Vice Presidential Dialogue 'Bolivian Agenda for the 21st Century'",
                            es: "Diálogo Vicepresidencial 'Agenda Boliviana para el Siglo XXI'"
                        },
                        location: "La Paz, Bolivia",
                        date: {
                            en: "May 5, 1997",
                            es: "5 de mayo de 1997"
                        }
                    },
                    {
                        title: {
                            en: "International Seminar 'Violence Against Children'",
                            es: "Seminario Internacional 'Violencia Contra los Niños'"
                        },
                        location: "Sao Paulo, Brazil",
                        date: {
                            en: "June 5-6, 1997",
                            es: "5-6 de junio de 1997"
                        }
                    }
                ]
            },
            ape: {
                title: {
                    en: "Events organized by FLADES in conjunction with CICES and APE",
                    es: "Eventos organizados por FLADES en conjunto con CICES y APE"
                },
                events: [
                    {
                        title: {
                            en: "II Euro-Latin American Communication Forum 'Governance for a Efficient and Participatory Democracy'",
                            es: "II Foro de Comunicación Euro-Latinoamericano 'Gobernanza para una Democracia Eficiente y Participativa'"
                        },
                        location: "Santiago de Chile",
                        date: {
                            en: "November 10 and 11, 1996",
                            es: "10 y 11 de noviembre de 1996"
                        }
                    },
                    {
                        title: {
                            en: "III Euro-Latin American Communication Forum 'Ethics, Democracy and Media'",
                            es: "III Foro de Comunicación Euro-Latinoamericano 'Ética, Democracia y Medios'"
                        },
                        location: "Isla Margarita, Venezuela",
                        date: {
                            en: "October 29 - November 2, 1997",
                            es: "29 de octubre - 2 de noviembre de 1997"
                        }
                    },
                    {
                        title: {
                            en: "IV Euro-Latin American Communication Forum 'The European Union and Latin America in the Face of Globalization'",
                            es: "IV Foro de Comunicación Euro-Latinoamericano 'La Unión Europea y América Latina Frente a la Globalización'"
                        },
                        location: "Porto, Portugal",
                        date: {
                            en: "October 12-14, 1998",
                            es: "12-14 de octubre de 1998"
                        }
                    },
                    {
                        title: {
                            en: "V Euro-Latin American Communication Forum 'Media Interaction between Europe and Latin America'",
                            es: "V Foro de Comunicación Euro-Latinoamericano 'Interacción Mediática entre Europa y América Latina'"
                        },
                        location: "Havana, Cuba",
                        date: {
                            en: "November 11-13, 1999",
                            es: "11-13 de noviembre de 1999"
                        }
                    },
                    {
                        title: {
                            en: "VI Euro- Latin American Communication Forum",
                            es: "VI Foro de Comunicación Euro-Latinoamericano"
                        },
                        location: "Panama",
                        date: {
                            en: "November 13 and 14, 2000",
                        }
                    },
                    {
                        title: {
                            en: "VII Euro-Latin American Communication Forum 'Ibero-America in the 21st Century'",
                            es: "VII Foro de Comunicación Euro-Latinoamericano 'Iberoamérica en el Siglo XXI'"
                        },
                        location: "Lima, Peru",
                        date: {
                            en: "October 19-21, 2001",
                        }
                    }
                ]
            },
        }
    },
}