/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        strongcyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 13%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern-desktop': "url('/images/bg-header-desktop.png')",
        'hero-pattern-mobile': "url('/images/bg-header-mobile.png')"
      },
    },
  },
  plugins: [],
}

