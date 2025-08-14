/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a12',    // Deep space black
        primary: '#00f0ff',       // Electric cyan
        secondary: '#ff00aa',     // Neon pink
        text: '#e0e0e0',          // Off-white glow
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        neonGlow: {
          '0%, 100%': { 
            'text-shadow': '0 0 5px #00f0ff, 0 0 10px #00f0ff' 
          },
          '50%': { 
            'text-shadow': '0 0 10px #ff00aa, 0 0 20px #ff00aa' 
          },
        }
      }
    },
  },
  plugins: [],
}