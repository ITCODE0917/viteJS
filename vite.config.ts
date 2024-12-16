import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      workbox: {
        globPatterns: ['**/*'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://itcode0917.github.io/vuJS/',  
            handler: 'CacheFirst',  
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, 
              },
            },
          },
        ],
      },
      registerType: 'autoUpdate',
      includeAssets: ['**/*'],
      manifest: {
        name: "Application d'affichage de Produits",
        short_name: "Liste de Produits",
        description: "Labo1 affichage liste de produits utilisant bootstrap et vueJs",
        theme_color: "#ff0000",
        background_color: "#ff0000",
        display: "standalone",
        scope: "/vuJS/",
        start_url: "/vuJS/",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
