module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // color増えるかも？
      colors: {
        primary: {
          DEFAULT: '#F2BDCD',
          light: 'rgba(242, 189, 205, 0.5)',
          dark: '#011627'
        },
        secondary: {
          main: '#FDFFFC',
          light: '#FEFEFE',
          dark: '#E5E5E5'
        },
        error: {
          main: '#F44336',
          light: 'rgba(244, 67, 54, 0.5)',
          dark: '#E31B0C'
        },
        success: {
          main: '#4CAF50',
          light: 'rgba(76, 175, 79, 0.5)',
          dark: '#459648'
        }
      },
      flex: { ...Array.from(Array(12 + 1)).map((_, i) => `${i} ${i} 0%`) }, // ex) flex-1(flex: 1 1 0%)
      fontFamily: {},
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    }
  },
  variants: {

  },
  plugins: []
}
