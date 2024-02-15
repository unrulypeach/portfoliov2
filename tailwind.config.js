const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      title: '#b7c7e8',
      titleGrey: '#757c8a',
      text: '#999999',
      texthov: '#c7c5c1',
      paragraph: '#979aa1',
      bg: '#181818',
      lightBG: '#1d232a',
      borderGrey: '#90a1c3',
      iconbg: '#333333',
      icon: '#dddddd',
    },
    screens: {
      tablet: '601px',
      desktop: '1024px',
      desktopLg: '1645px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
