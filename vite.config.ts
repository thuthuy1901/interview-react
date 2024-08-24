import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
  },
})
