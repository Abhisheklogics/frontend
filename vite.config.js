import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  server:{
    port:10000,
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
    
    },
  plugins: [react()]
  
})

