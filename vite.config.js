import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    eslint(),
    react({
      babel: {
        plugins: ['@babel/plugin-syntax-import-assertions'],
      },
    }),
  ],
  define: {
    'import.meta.vitest': 'undefined',
  },
})
