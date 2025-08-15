/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a12',
        primary: '#00f0ff',
        secondary: '#ff00aa',
        text: '#e0e0e0',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
        'pulse-border': 'pulseBorder 2s infinite',
      },
      keyframes: {
        neonGlow: {
          '0%, 100%': { 
            'text-shadow': '0 0 5px #00f0ff, 0 0 10px #00f0ff',
            'box-shadow': '0 0 5px #00f0ff, 0 0 10px rgba(0, 240, 255, 0.5)'
          },
          '50%': { 
            'text-shadow': '0 0 10px #ff00aa, 0 0 20px #ff00aa',
            'box-shadow': '0 0 10px #ff00aa, 0 0 20px rgba(255, 0, 170, 0.5)'
          },
        },
        pulseBorder: {
          '0%, 100%': { 'border-color': '#00f0ff' },
          '50%': { 'border-color': '#ff00aa' },
        }
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      rotate: {
        'y-15': 'rotateY(15deg)',
        'y-10': 'rotateY(10deg)',
      },
      perspective: {
        '1000': '1000px',
      },
      boxShadow: {
        'neon-sm': '0 0 5px #00f0ff',
        'neon-md': '0 0 10px #00f0ff, 0 0 15px rgba(0, 240, 255, 0.5)',
        'neon-lg': '0 0 15px #00f0ff, 0 0 25px rgba(0, 240, 255, 0.5), 0 0 35px rgba(0, 240, 255, 0.3)',
        'neon-pink': '0 0 15px #ff00aa, 0 0 25px rgba(255, 0, 170, 0.7)'
      },
      saturate: {
        '120': '1.2',
        '150': '1.5',
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'), // For advanced glow effects
  ],
}