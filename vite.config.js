import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    // Generate source maps for better debugging
    sourcemap: false,
    // Optimize for production - using default esbuild minifier
    minify: 'esbuild',
  },
  // SEO-friendly routing
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
