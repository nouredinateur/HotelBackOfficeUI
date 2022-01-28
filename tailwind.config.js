module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'avoca' : '#97C23A',
      'avoca-dark' : '#6B9E2A',
      'ocean' : '#506CAE',
      'ocean-dark' : '#3A4C8E',
      'cloud': '#F4F9FF',
      'white': '#FFFFFF',
      'lipstick' : '#CC5A98',
      'faint-pink' : '#D9A6B5',
      'black': '#0A0E1C',
      'gray': '#EEEEEE'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
