import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  server:{
    port:11000,
    host:true,
    proxy:{
      
      "/arduino/getespData":'http://localhost:10000/' ,
      "/arduino/datasave":'http://localhost:10000/',
      "/arduino/getDataArduino":'http://localhost:10000/',
      "/arduino/getDataRaspberry":'http://localhost:10000/', 
      "/arduino/homeImagesSave":'http://localhost:10000/',
      "/arduino/homeData":'http://localhost:10000/',
     
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

