/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",       // Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}",  // Your components
    "./app/**/*.{js,ts,jsx,tsx}",         // If using Next.js 13+ /app dir
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}" // Shared UI packages in Turborepo
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
