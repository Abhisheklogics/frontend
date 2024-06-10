import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';
import imagemin from 'vite-plugin-imagemin'

export default defineConfig({
  mode: 'production',
  server: {
    port: 10000,
    host: true,
    proxy: {
      '/arduino/homeData': {
        target: 'http://production-backend.com/', // Replace with your production backend URL
        changeOrigin: true,
        secure: true,
        logLevel: 'debug', // Enable detailed logging
      },
      // Add other proxy rules for production
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/components/')) {
            return 'components';
          }
          if (id.includes('src/pages/')) {
            return 'pages';
          }
        },
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to 800 KB
  },
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
  },
  optimizeDeps: {
    include: ['react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/hljs'],
  },
  plugins: [
    
      compression({
        verbose: true,
        algorithm: 'brotli',
        threshold: 10240, // Compress files larger than 10 KB
        deleteOriginalAssets: true,
      }),
      compression({
        verbose: true,
        algorithm: 'gzip',
        threshold: 10240, // Compress files larger than 10 KB
        deleteOriginalAssets: true,
      }),
   
    react(),
    imagemin({
      // Add image optimization configurations
    }),
  ],
})
