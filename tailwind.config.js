const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: 'class',

  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      red: colors.red,
      transparent: 'transparent',
      current: 'currentColor'
    },

    fontFamily: {
      core: ['Aktiv Grotesk', 'sans-serif'],
      heading: ['League Gothic', 'sans-serif']
    },

    fontSize: {
      xs: '0.64rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
      '5xl': '3.815rem',
      '6xl': '4.768rem',
      '7xl': '5.96rem',
      '8xl': '7.451rem',
      '9xl': '9.313rem',
      '10xl': '11.642rem',
      '11xl': '14.552rem',
      '12xl': '18.19rem',
      '13xl': '22.737rem',
      '14xl': '28.422rem',
      '15xl': '35.527rem',
      '16xl': '44.409rem',
      '17xl': '55.511rem'
    },

    extend: {
      zIndex: {
        '-1': '-1',
        99: 99,
        100: 100,
        999: 999
      }
    }
  }
};
