/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#4F46E5', // Indigo-600
        'primary-dark': '#6366F1',  // Indigo-500
        'background-light': '#FFFFFF',
        'background-dark': '#111827', // gray-900
        'text-light': '#1F2937', // gray-800
        'text-dark': '#F9FAFB', // gray-50
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}