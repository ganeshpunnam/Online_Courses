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
      backgroundImage: {
        'custom-image': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb0PWPQlSv3vQ89abcfdXk2tSjRjmXzTMJM6Q9K6wCMPCxLnsUzB6gmXwxxhWZaTrFWg&usqp=CAU')",
      },
    },
  },
  plugins: [],
};
export default config;
