import type { Config } from 'tailwindcss'
import tailwindScrollbar from 'tailwind-scrollbar'


const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['"Rubik Doodle Shadow"', "cursive"],
        boldFancy: ['"Anton"', "sans-serif"],
      },
    },
  },
  plugins: [
    tailwindScrollbar({nocompatible: true}),
   
  ],
}

export default config