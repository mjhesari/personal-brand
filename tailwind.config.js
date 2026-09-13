import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
    
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F3F2F7",
            foreground: "#181535",
            content1: "#FFFFFF",
            content2: "#F7F6FB",
            primary: {
              DEFAULT: "#3D61FF",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            background: "#0B0B12",
            foreground: "#F3F2F7",
            content1: "#16161F",
            content2: "#1E1E28",
            primary: {
              DEFAULT: "#3D61FF",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
}
