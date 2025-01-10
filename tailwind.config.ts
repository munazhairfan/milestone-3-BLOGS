import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        'dancing' : "Dancing Script",
<<<<<<< HEAD
      },
      screens: {
        'xs': '320px', 
        'sm': '480px', 
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px',
        '2xl': '1536px',
=======
>>>>>>> 6865bc71177856998400ac204b551de6417b1b0a
      }
    },
  },
  plugins: [],
};
export default config;
