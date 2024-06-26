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
      },
      green: '#52C535'
    },
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      },
      dropShadow: {
        '3xl': '0px 0px 20px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

