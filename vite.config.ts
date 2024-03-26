import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      config: "/src/configuration",
      constants: "/src/constants",
      pages: "/src/pages",
      styles: "/src/styles",
    }
  }
})
