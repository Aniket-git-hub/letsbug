/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      transitionTimingFunction: {
        'gsap-ease': 'cubic-bezier(0.25, 1, 0.5, 1)', // Mimic GSAP's easing
      },

      colors: {
        primary: {
          light: '#4CAF50',
          dark: '#81C784',
        },
        secondary: {
          light: '#0288D1',
          dark: '#03A9F4',
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        surface: {
          light: '#F5F5F5',
          dark: '#1E1E1E',
        },
        accent: {
          light: '#FF5722',
          dark: '#FF7043',
        },
        text: {
          primary: {
            light: '#212121',
            dark: '#FFFFFF',
          },
          secondary: {
            light: '#757575',
            dark: '#BDBDBD',
          },
        },
      },
    },
  },
  plugins: [],
}

