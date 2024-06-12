import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import { visualizer } from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
=======
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  server:{
   port:10001,
  host:true,
    proxy:{
      
      
        '/arduino/homeData': {
          target: 'https://adhyans-backend.onrender.com', // Replace with your backend URL
          changeOrigin: true,
          secure: true,
          logLevel: 'debug', // Enable detailed logging
        },
        '/arduino/getDataArduino': {
          target: 'https://adhyans-backend.onrender.com', // Replace with your backend URL
          changeOrigin: true,
          secure: true,
          logLevel: 'debug', // Enable detailed logging
        },
        '/arduino/getDataRaspberry': {
          target: 'https://adhyans-backend.onrender.com', // Replace with your backend URL
          changeOrigin: true,
          secure: true,
          logLevel: 'debug', // Enable detailed logging
        },
        '/arduino/getespData': {
          target: 'https://adhyans-backend.onrender.com', // Replace with your backend URL
          changeOrigin: true,
          secure: true,
          logLevel: 'debug', // Enable detailed logging
        },
       
     
    } ,
    plugins: [visualizer()],
    build: {
     manualChunks:1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
  
       // Increase the limit to 800 KB
    manualChunks:'1000 KB',
    },
    babel: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
    optimizeDeps: {
      include: ['react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/hljs']
    },
    plugins: [react()]
})
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd

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
