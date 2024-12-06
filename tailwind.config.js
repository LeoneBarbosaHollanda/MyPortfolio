module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': {
          50: '#edf8ff',
          100: '#d6edff',
          200: '#b5e0ff',
          300: '#83ceff',
          400: '#48b3ff',
          500: '#1e90ff',
          600: '#0070f3',
          700: '#0058cc',
          800: '#0048a5',
          900: '#003c8f',
          950: '#00254d',
        },
        'dark': {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#565656',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#090909',
        },
      },
    },
  },
  plugins: [],
}

