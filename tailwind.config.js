module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#060606',
        surface: '#121212',
        primary: '#03DAC6',
        accent: '#07BB82',
        secondary: '#02DF34',
        error: '#CF6679',
        onbackground: '#FAFAFA',
        onsurface: '#FDFDFD',
        onprimary: '#060606',
        onaccent: '#060606',
        onsecondary: '#060606',
        onerror: '#060606',
      },
    },
  },
  plugins: [],
};
