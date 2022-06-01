module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      spacing: {
          13: '3.25rem'
      },
      animation: {
          'spin-slow': 'spin 3s linear infinite'
      },
      colors: {
        'dark': '#0A0D25',
        'light': '#E3EDF2',
        'primary': '#7c3aed'
      },
      screens: {
        '2xl': '1320px',
      },
    }
  },
  plugins: [],
}
