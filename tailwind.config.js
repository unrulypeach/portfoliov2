const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      title: '#b7c7e8',
      borderGrey: '#90a1c3',
      iconbg: '#333333',
      icon: '#dddddd',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
