/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: '#DE2C20',
      secondary: '#C2C535',
      whitetext: '#FFFFEA',
      dark: {
        15: '#151515',
        20: '#202020',
        25: '#252525',
        50: '#505050'
      }
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      }
    },
  },
  plugins: [],
}

