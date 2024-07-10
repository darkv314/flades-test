/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                section:
                    "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 6px 6px 30px 15px rgba(0,0,0,0);",
            },
        },
        keyframes: {
            "infinite-scroll": {
                from: { transform: "translateX(0)" },
                to: { transform: "translateX(-100%)" },
            },
        },
        animation: {
            "infinite-scroll": "infinite-scroll 25s linear infinite",
        },
    },
    darkMode: "class",
    plugins: [
        nextui(),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "animation-delay": (value) => ({
                        "animation-delay": value,
                    }),
                },
                { values: theme("transitionDelay") }
            );
        }),
    ],
} satisfies Config;

export default config;
