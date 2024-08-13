/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        33: '8.25rem',
        37: '9.25rem',
      },
      height: {
        10.5: '2.625rem',
      },
      maxWidth: {
        '3xl': '44rem',
      },
      margin: {
        18: '4.5rem',
      },
      gap: {
        45: '11.375rem',
      },
      fontSize: {
        '6xl': '4rem',
      },
      lineHeight: {
        normal: '1.2',
      },
      letterSpacing: {
        wide: '.15em',
      },
      backgroundImage: {
        'main-gradient':
          'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'scissors-gradient':
          'linear-gradient(180deg, hsl(40, 84%, 53%) 0%, hsl(39, 89%, 49%) 100%)',
        'paper-gradient':
          'linear-gradient(180deg, hsl(230, 89%, 65%) 0%, hsl(230, 89%, 62%) 100%)',
        'rock-gradient':
          'linear-gradient(180deg, hsl(349, 70%, 56%) 0%, hsl(349, 71%, 52%) 100%)',
      },
      boxShadow: {
        'button-inset': 'inset 0px 8px 0px rgba(96, 110, 133, 0.25)',
      },
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'button-inside': 'hsl(225, 25%, 91%)',

        'scissors-backdrop': 'hsl(28, 75%, 45%)',
        'paper-backdrop': 'hsl(229, 65%, 46%)',
        'rock-backdrop': 'hsl(347, 76%, 35%)',

        circle: 'hsl(237, 49%, 15%)',
      },
    },
    fontFamily: {
      sans: '"Barlow Semi Condensed", sans-serif',
    },
  },
  plugins: [],
}
