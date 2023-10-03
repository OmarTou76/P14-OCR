import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* 
  - Tester le ficher build (dossier dist)  
  - Faire fonctionner la librairie builder avec npm link
*/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600
  },
  base: './'
})
