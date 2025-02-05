import type { Config } from 'tailwindcss'
import tailwindScrollbar from 'tailwind-scrollbar'


const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
   
  ],
}

export default config