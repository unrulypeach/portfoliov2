const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      title: '#b7c7e8',
      paragraph: '#979aa1',
      lightBG: '#1d232a',
      borderGrey: '#90a1c3',
      iconbg: '#333333',
      icon: '#dddddd',
    },
    screens: {
      tablet: '601px',
      desktop: '1024px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
