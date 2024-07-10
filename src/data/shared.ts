import { LinkProps } from "@tanstack/react-router";

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

export const navTitles = navLinks.map((link) => {
    return {
        to: link.to,
        title: link.to.replace("/", ""),
    };
});
