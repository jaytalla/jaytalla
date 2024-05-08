/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'jt-primary-darkest': '#110404',
        'jt-primary-dark': '#201412',
        'jt-primary': '#372C2A',
        'jt-primary-light': '#5C544D',
        'jt-primary-lightest': '#B8B4AA',
        'jt-white': '#FFFAFA',
        'jt-warm': '#B96F50',
      }
    },
  },
  plugins: [],
}

