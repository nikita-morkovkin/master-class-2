import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  // resolve: {
  //   alias: {
  //     '@components': './frontend/src/components',
  //     '@icons': './frontend/public/icons',
  //     '@pictures': './frontend/public/pictures'
  //   }
  // },
  server: {
    port: 3001,
  },
})
