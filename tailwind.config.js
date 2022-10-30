/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': {
          'background': '#08060B',
        },
        'primary': {
          'white': '#ffffff',
          'blue': '#6CCEF9',
          'purple': '#7E7BFF',
        },
        'purple': {
          'second': '#5600E8',
          'third': '#731ABA',
        },
        'white': {
          100: '#AEAEAE',
          200: '#C9C9C9'
        },
        'overlay': {
          'first': 'rgba(0, 0, 0, 0)',
        },
        'yellow': '#FFDD67',
      },
      fontSize: {
        'small': ['20px', '30px'],
        'default': ['22px', '33px'],
        'semilarge': ['24px', '36px'],
        'large': ['26px', '39px'],
        'big': ['50px', '75px'],
        'huge': ['60px', '90px'],
      },
      boxShadow: {
        'default': '0px 0px 20px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'main-background': "url('./images/background.jpeg')",
      }
    },
  },
  plugins: [],
}
