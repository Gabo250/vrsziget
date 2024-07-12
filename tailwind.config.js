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
        'games-header': "url('/images/vr-games.jpg')",
        'price-card': "url('/images/price-bg.jpg')",
        'price-header': "url('/images/price-header.jpg')",
        'vr-res': "url('/images/vr-res.jpg')",
        'katvr': "url('/images/kat-vr.jpg')",
        'simulator': "url('/images/simulator.jpg')",
        'login': "url('../images/bg-login.webp')"
      },

      screens: {
        'xxlsm': {'max': '390px'},
        'xlsm': {'max': '440px'},
        'xsm': {'max': '560px'},
        'sm' : {'max': '640px'},
        'd': {'max': '730px'},
        'md' : {'max': '768px'},
        'mmd': {'min': '769px'},
        'lmd': {'max': '840px'},
        'xmd': {'max': '900px'},
        'xlmd': {'max': '980px'},
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
        'border-r': 'AnimBorder-r 2s linear infinite',
        "color-change": "colorchange 4s infinite",
        spin: "spin 1s linear infinite",
        scale: "scale 2s linear infinite",
        reveal: "reveal 2s linear",
        "error-animation": "errorcolor 2s linear infinite"
      },

      keyframes: {
        'AnimBorder-t': {
           '0%': { transform: 'translateX(-100%)', 'opacity': '1' },
           '100%': { transform: 'translateX(100%)' }
        },

        'AnimBorder-l': {
          '0%': { transform: 'translateY(-100%)', 'opacity': '1' },
          '100%': { transform: 'translateY(100%)' }
        },
        
        'AnimBorder-b': {
           '0%': { transform: 'translateX(100%)', 'opacity': '1' },
           '100%': { transform: 'translateX(-100%)' }
        },

        'AnimBorder-r': {
          '0%': { transform: 'translateY(100%)', 'opacity': '1' },
          '100%': { transform: 'translateY(-100%)' }
        },

        colorchange: {
          "0%, 100%": { "border-color": "rgba(191 219 254 / 80%)" },
          "33.33%": { "border-color": "rgba(147 197 253 / 80%)" },
          "66.66%": { "border-color": "rgba(96 165 250 / 80%)" },
        },
  
        errorcolor: {
          "0%,100%": { "border-color": "rgb(248 113 113)" },
          "50%": { "border-color": "rgb(185 28 28)" }
        },
  
        reveal: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
  
        spin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
  
        scale: {
          "0%": {
            transform: "scale(1)",
          },
  
          "80%,100%": {
            transform: "scale(0)",
          },
        }
      }
    },
  },
  plugins: [],
}