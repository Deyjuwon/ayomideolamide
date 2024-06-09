/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkWhite': '#f5f5f7',
        'lightBlack': '#D9D9D9',
        'darkBlack': '#737373',
        'green1': '#7B876D',
        'green2': '#989E8B',
        'brown1': '#DDB8A6',
        'brown2': '#D49B7E',
        'yellow1': '#F5F5DC',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widerr: '.4em',
        widestt: '.7em',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'homeBg': "url('/mide1.jpeg')",
          'hero-pattern': "url('/src/assets/nature.jpeg')",
          
      },
      height: {
        '400': '400px',
        '520': '520px',
        '470': '470px',
        '700': '700px'
      },
      width: {
        '420': '420px',
        '314':`314px`,
        '560': '560px',
      },
      fontSize: {
        
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
      
    },
  },
  plugins: [],
}