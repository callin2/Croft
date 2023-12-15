/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        base600: '#2f2f2f',
        base500: '#767676',
        yellow: '#F2F600',
        'lightest-gray': '#F1F1F1',
        'custom-color': '#F3ECDF',
      },
    },
  },
  plugins: [],
};
