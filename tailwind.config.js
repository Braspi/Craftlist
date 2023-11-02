/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'light': 'rgb(0, 176, 190)',
        'dark': 'rgb(1, 129, 168)',
        'background-color': 'rgb(30, 30, 30)'
      },
      backgroundImage: {
        'craftlist-gradient': 'linear-gradient(200deg, rgba(0, 176, 190, 1) 0%, rgba(1, 129, 168, 1) 100%)',
        'background-gradient': 'url(\'./assets/background/background.svg\')',
      },
      backgroundSize: {
        'full': '100vw',
      },
      borderColor: {
        'shadow': 'rgba(255, 255, 255, 0.15)',
      },
      borderWidth: {
        'size-footer': '1px',
        'size-shadow': '0.5px',
      },
      boxShadow: {
        'shadow-top': 'inset 0px 5px 20px 10px rgba(255, 255, 255, 0.015)',
        'shadow-bottom': 'inset 0px -5px 20px 10px rgba(255, 255, 255, 0.015)',
      },
      opacity: {
        '2.5': '2.5'
      }
    },
  },
  plugins: [],
}

