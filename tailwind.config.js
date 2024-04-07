/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'stone': {
          '50': '#ecf7ff',
          '100': '#dcf0ff',
          '200': '#c0e2ff',
          '300': '#9acdff',
          '400': '#72abff',
          '500': '#518aff',
          '600': '#3164fa',
          '700': '#2550dd',
          '800': '#2145b2',
          '900': '#23408c',
          '950': '#0b2545',
      },
      }
    },
  },
  plugins: [],
}

