import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)"] },
      colors: { brand: { 50:"#fbf7f2",100:"#f6efe6",200:"#eadbc8",300:"#dcc3a4",400:"#cfa97f",500:"#b98758",600:"#9f6d42",700:"#7f5636",800:"#5c3e2a",900:"#3c281c" } },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    }
  },
  plugins: []
} satisfies Config;
