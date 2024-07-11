import { LinkProps } from "@tanstack/react-router";
import { ES, US } from "country-flag-icons/react/3x2";

const navLinks = [
    {
        to: "/proyectos",
    },
    {
        to: "/compliance",
    },
    {
        to: "/chiquitania",
    },
    {
        to: "/nosotros",
    },
] as const satisfies ReadonlyArray<LinkProps>;

export let navTitles = navLinks.map((link) => {
    return {
        to: link.to,
        title: {
            es: link.to.replace("/", ""),
            en: ""
        },
    };
});

navTitles = [
    {
        to: "/nosotros",
        title: {
            es: "nosotros",
            en: "about us",
        },
    },
    {
        to: "/proyectos",
        title: {
            es: "proyectos",
            en: "projects",
        },
    },
    {
        to: "/chiquitania",
        title: {
            es: "chiquitania",
            en: "chiquitania",
        },
    },
    {
        to: "/compliance",
        title: {
            es: "cumplimiento",
            en: "compliance",
        },
    },
];

export const languages = [
    {
        value: "es",
        label: "Español",
        flag: <ES />,
    },
    {
        value: "en",
        label: "English",
        flag: <US />,
    },
];
