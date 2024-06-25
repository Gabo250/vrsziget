/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'libreBas': ['Libre Baskerville', 'serif'],
      },

      backgroundImage: {
        'logo': "url('/images/vr-logo.png')",
        'header': "url('/images/home-bg.jpg')",
        'island': "url('/images/island-vr.png')",
        'vr-man': "url('/images/MQ3-human.png')",
        'mq3': "url('/images/MQ3-headset.png')",
        'kat': "url('/images/kat-vr.png')",
        'games-header': "url('/images/vr-games.jpg')"
      },

      screens: {
        'xxlsm': {'max': '360px'},
        'xlsm': {'max': '440px'},
        'xsm': {'max': '560px'},
        'sm' : {'max': '640px'},
        'md' : {'max': '768px'},
        'mmd': {'min': '769px'},
        'lmd': {'max': '840px'},
        'xmd': {'max': '900px'},
        'lg' : {'max': '1024px'},
        'xl' : {'max': '1280px'},
        '2xl': {'max': '1536px'},
      },

      colors: {
        'l-purple': '#590E87',
        'hd-purple': '#360D6A',
        'd-purple': '#1F0244',
        'c-teal': '#118696',
        'd-teal': '#022B34',
        'h-teal': '#00F0FF'
      },

      animation: {
        'border-t': 'AnimBorder-t 2s linear infinite',
        'border-l': 'AnimBorder-l 2s linear infinite',
        'border-b': 'AnimBorder-b 2s linear infinite',
        'border-r': 'AnimBorder-r 2s linear infinite'
      },

      keyframes: {
        'AnimBorder-t': {
           '0%': { transform: 'translateX(-100%)' },
           '100%': { transform: 'translateX(100%)' }
        },

        'AnimBorder-l': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        
        'AnimBorder-b': {
           '0%': { transform: 'translateX(100%)' },
           '100%': { transform: 'translateX(-100%)' }
        },

        'AnimBorder-r': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
      }
    },
  },
  plugins: [],
}