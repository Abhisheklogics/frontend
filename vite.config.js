import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
  
    proxy:{
      
      "/arduino/getespData":'http://localhost:10000/' ,
      "/arduino/datasave":'http://localhost:10000/',
      "/arduino/getDataArduino":'http://localhost:10000/',
      "/arduino/getDataRaspberry":'http://localhost:10000/', 
      "/arduino/homeImagesSave":'http://localhost:10000/',
      "/arduino/homeData":'http://localhost:10000/',
     
    } ,
      
    build: {
      rollupOptions: {
        external: ['/src/main.jsx']
      }
    }   
    },
  plugins: [react()]
  
})

