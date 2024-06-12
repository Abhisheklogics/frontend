import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

export default defineConfig({
  server: {
    proxy: {
      '/arduino/': 'http://localhost:10000/',
      '/arduino/getDataArduino': 'http://localhost:10000/',
      '/arduino/getDataRaspberry': 'http://localhost:10000/',
      '/arduino/getespData': 'http://localhost:10000/'
    }
  },
  preview: {
    port: 3000,
    strictPort: true,
    host:true,
    open: '/arduino/',
    proxy: {
      '/arduino/': {
        target: 'http://localhost:10000/',
        changeOrigin: true,
        rewrite: (path) => path.replace('/^\/arduino\//', '')
      },
      '/arduino/getDataArduino': {
        target: 'http://localhost:10000/',
        changeOrigin: true,
        rewrite: (path) => path.replace('/^\/arduino\//', '')
      },
      '/arduino/getDataRaspberry': {
        target: 'http://localhost:10000/',
        changeOrigin: true,
        rewrite: (path) => path.replace('/^\/arduino\//', '')
      },
      '/arduino/getespData': {
        target: 'http://localhost:10000/',
        changeOrigin: true,
        rewrite: (path) => path.replace('/^\/arduino\//', '')
      }
    }
  },
  plugins: [
    react(),
    visualizer(),
    terser(),
    commonjs(),
    nodeResolve()
  ],
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    outDir: 'dist',
    rollupOptions: {
      plugins: [
        terser(),
        commonjs(),
        nodeResolve()
      ],
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500
  },
  cache: {
    dir: 'node_modules/.vite/cache'
  },
})
