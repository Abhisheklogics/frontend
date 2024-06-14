/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  server:{
   
    proxy:{
      
      
        '/arduino/': 'http://localhost:10000/', // Replace with your backend URL
          // Enable detailed logging
       
        '/arduino/getDataArduino':'http://localhost:10000/', // Replace with your backend URL
          // Enable detailed logging
       
        '/arduino/getDataRaspberry': 'http://localhost:10000/', // Replace with your backend URL
          // Enable detailed logging
        
        '/arduino/getespData':'http://localhost:10000/', // Replace with your backend URL
          // Enable detailed logging
        
    }, 
  },
  preview: {
    proxy: {
      '/arduino/': {
        target: 'https://adhyans-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
    },
  },
  plugins: [
    react(),
    visualizer(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    // Exclude node_modules from transformation
    commonjsOptions: {
      ignore: ['node_modules'],
    },
    // Exclude node_modules from transformation
    target: 'esnext',
  },
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
  },
  optimizeDeps: {
    include: ['react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/hljs'],
    // Move btoa to devDependencies
    exclude: ['node_modules'],
  },
    plugins: [react()]
})
*/
/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';
export default defineConfig({
  server: {
    proxy: {
      '/arduino/': 'http://localhost:10000/',
      '/arduino/getDataArduino': 'http://localhost:10000/',
      '/arduino/getDataRaspberry': 'http://localhost:10000/',
      '/arduino/getespData': 'http://localhost:10000/',
    },
  },
  preview: {
    host:true,
    port:4000,
    proxy: {
      '/arduino/': {
        target: 'https://adhyans-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
      '/arduino/getDataArduino': {
        target: 'https://adhyans-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
      '/arduino/getDataRaspberry': {
        target: 'https://adhyans-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
      '/arduino/getespData': {
        target: 'https://adhyans-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
    },
  },
  plugins: [
    react(),
    visualizer(),
    nodeResolve(),
  ],
  build: {
    chunkSizeWarningLimit:1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    // Exclude node_modules from transformation
    commonjsOptions: {
      ignore: ['node_modules'],
    },
    // Exclude node_modules from transformation
    target: 'esnext',
  },
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
  },
  optimizeDeps: {
    include: ['react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/hljs'],
    // Exclude node_modules from optimization
    exclude: ['node_modules'],
  },
});*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { visualizer } from 'rollup-plugin-visualizer'; 
import dotenv from "dotenv"
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const {VITE_APP_PORT,VITE_APP_BASE_URL}=process.env
console.log('vite',VITE_APP_BASE_URL,VITE_APP_PORT)
// Ensure you import visualizer properly
export default defineConfig({
  server: {
    open:true,
    port:VITE_APP_PORT,
    host:true,
    proxy: {
      '/arduino/':{
        target: VITE_APP_BASE_URL,
        changeOrigin:true,

      },
      '/arduino/getDataArduino':{
        target: VITE_APP_BASE_URL,
        changeOrigin:true
      },
      
      '/arduino/getDataRaspberry':{
        target:VITE_APP_BASE_URL,
        changeOrigin:true
      } ,
      'arduino/getespData':{
        target:VITE_APP_BASE_URL, 
        changeOrigin:true
      },
    },
  },
  plugins: [
    react(),
    visualizer({ // Ensure you are using visualizer correctly as a plugin
      filename: './dist/stats.html' 
    }),
    nodeResolve(),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    minify: true,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    commonjsOptions: {
      ignore: ['node_modules'],
    },
  },
  optimizeDeps: {
    include: ['react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/hljs'],
  },
});
