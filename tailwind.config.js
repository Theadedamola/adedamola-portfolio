/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'inset 0 4px 4px rgba(7, 61, 148, 0.33)',
      },
      backgroundImage: {
        'hero-bg': "url('/src/Components/assets/gradient-bg.jpeg')",
      },
      fontFamily: {
        reyka: ['Reyka FREE', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
