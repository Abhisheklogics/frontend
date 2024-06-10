import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  server:{
   port:10000,
    proxy:{
      
      
        '/arduino/homeData': {
          target: 'http://localhost:10000/', // Replace with your backend URL
          changeOrigin: true,
          secure: true,
          logLevel: 'debug', // Enable detailed logging
        },
        '/arduino/getDataArduino': {
          target: 'http://localhost:10000/', // Replace with your backend URL
          changeOrigin: true,
          secure: true,
          logLevel: 'debug', // Enable detailed logging
        },
        '/arduino/getDataRaspberry': {
          target: 'http://localhost:10000/', // Replace with your backend URL
          changeOrigin: true,
          secure: true,
          logLevel: 'debug', // Enable detailed logging
        },
        '/arduino/getespData': {
          target: 'http://localhost:10000/', // Replace with your backend URL
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

