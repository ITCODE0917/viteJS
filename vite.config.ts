
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vuJS/',
  plugins: [
    vue(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: [
        "**/*",
      ],
      registerType: 'autoUpdate',
      manifest: {
        "theme_color": "#ff0000",
        "background_color": "#ff0000",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Application d'affichage de Produits",
        "short_name": "Liste de Produits",
        "description": "Labo1 affichage liste de produits utilisant bootstrap et vuJs",
        "icons": [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      }
    }),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
