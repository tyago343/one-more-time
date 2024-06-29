// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4B49AC',
          light: '#98BDFF',
        },
        supporting: {
          blue: '#7DA0FA',
          purple: '#7978E9',
          pink: '#f3797E',
        },
        error: {
          DEFAULT: '#D32F2F',
          light: '#E57373',
        },
      },
      boxShadow: {
        primary: '0 4px 6px rgba(75, 73, 172, 0.5)',
        'primary-light': '0 4px 6px rgba(152, 189, 255, 0.5)',
        'supporting-blue': '0 4px 6px rgba(125, 160, 250, 0.5)',
        'supporting-purple': '0 4px 6px rgba(121, 120, 233, 0.5)',
        'supporting-pink': '0 4px 6px rgba(243, 121, 126, 0.5)',
        error: '0 4px 6px rgba(211, 47, 47, 0.5)',
        'error-light': '0 4px 6px rgba(229, 115, 115, 0.5)',
      },
    },
  },
  plugins: [],
};
