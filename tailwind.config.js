/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8ecef',
          100: '#b7c3cd',
          200: '#94a7b5',
          300: '#647e94',
          400: '#45657f',
          500: '#173f5f', // main
          600: '#153956',
          700: '#102d43',
          800: '#0d2334',
          900: '#0a1a28',
        },
        secondary: {
          50: '#FAEFEF',
          100: '#f9cac2',
          200: '#f7b1a5',
          300: '#f38d7c',
          400: '#f17762',
          500: '#ed553b', // main
          600: '#d84d36',
          700: '#a83c2a',
          800: '#822f20',
          900: '#642419',
        }
      },
    },
  },
  plugins: [],
}
