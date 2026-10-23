import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { contentPlugin, CONTENT_DIR } from './content-plugin'

export default defineConfig({
  plugins: [react(), contentPlugin()],
  server: { fs: { allow: ['.', CONTENT_DIR] } },
  build: { target: 'es2022', cssMinify: true },
})
