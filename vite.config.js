import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fcc-random-quote/',
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
})
