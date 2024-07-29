/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "#261d6d",
            egg: "#F0EAD6",
            secondary: "#F0EAD6",
            linen: "#E9DCC9",
            ivory: "#FFFFF0",
            charcoal: "36454F",
            onyx: "#353935",
            "matte-black": "#28282B",
            "logo-blue": "#0ad4de",
            "dark-gray": "#A9A9A9",
            black: "#000",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
}
