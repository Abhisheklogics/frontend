import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
  
    proxy:{
      
      "/arduino/getespData": 'https://adhyans-backend.onrender.com',
      "/arduino/datasave":'https://adhyans-backend.onrender.com',
      "/arduino/getDataArduino":'https://adhyans-backend.onrender.com',
      "/arduino/getDataRaspberry": 'https://adhyans-backend.onrender.com',
      "/arduino/homeImagesSave":'https://adhyans-backend.onrender.com',
      "/arduino/homeData":'https://adhyans-backend.onrender.com',
     
    } ,
      
    build: {
      rollupOptions: {
        external: ['/src/main.jsx']
      }
    }   
    },
  plugins: [react()]
  
})

