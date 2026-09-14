import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ieboard/',
  plugins: [react()],
  server: {
    // Force dependency optimization
    force: true,
  }
})
