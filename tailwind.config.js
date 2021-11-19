const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      overlay: colors.white,
      trueblack: colors.black,
      white: colors.white,
      background: '#060606',
      surface: '#121212',
      primary: '#03DAC6',
      accent: '#07BB82',
      secondary: '#02DF34',
      error: '#CF6679',
      on: {
        background: '#FAFAFA',
        surface: '#FDFDFD',
        primary: '#060606',
        accent: '#060606',
        secondary: '#060606',
        error: '#060606',
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    opacity: {
      elevation0: '0%',
      elevation1: '5%',
      elevation2: '7%',
      elevation3: '8%',
      elevation4: '9%',
      elevation6: '11%',
      elevation8: '12%',
      elevation12: '14%',
      elevation16: '15%',
      elevation24: '16%',
      overlayenabled: '0%',
      overlayhovered: '4%',
      overlayfocused: '12%',
      overlaypressed: '10',
      overlaydragged: '8%',
      emphasistexthigh: '87%',
      emphasistextmedium: '60%',
      emphasistextdisabled: '38%',
      //TODO: add css for diabled surface states
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
