import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B5E75', // Professional teal
        secondary: '#4CAF50', // Nature green
        accent: '#81C784', // Light green
        dark: '#0F3C4A', // Dark teal
        light: '#E8F5F5', // Light background
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
