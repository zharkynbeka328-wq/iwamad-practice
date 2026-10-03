import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],

  base: '/iwamad-practice/',

  build: {
    outDir: 'docs',
  },

  test: {
    environment: 'jsdom',
  },
})