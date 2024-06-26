import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-empat',
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      config: "/src/configuration",
      constants: "/src/constants",
      pages: "/src/pages",
      styles: "/src/styles",
      assets: "/src/assets",
      types: "/src/types",
      ui: "/src/ui",
      modules: "/src/modules",
    }
  }
})
