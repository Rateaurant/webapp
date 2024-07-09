/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: '#f08000',
      white: {
        0: '#e6e6e6',
        50: '#f9f9f9',
        100: '#ffffff'
      },
      black: '#000000'
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
        balooBhai2: ['BalooBhai2']
      },
    },
  },
  plugins: [],
}

