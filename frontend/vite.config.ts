import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections (Docker)
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',  // For local development (non-containerized)
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
