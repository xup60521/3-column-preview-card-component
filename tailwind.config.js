/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Bright_orange: "hsl(31, 77%, 52%)",
                c_Dark_cyan: "hsl(184, 100%, 22%)",
                c_Very_dark_cyan: "hsl(179, 100%, 13%)",
                c_Transparent_white: "hsla(0, 0%, 100%, 0.75)",
                c_Very_light_gray: "hsl(0, 0%, 95%)",

            },
            fontFamily: {
                big_shoulders: ["Big Shoulders Display", "sans-serif"],
                lexend_deca: ["Lexend Deca", "sans-serif"]
            }
        },
    },
    plugins: [],
}

