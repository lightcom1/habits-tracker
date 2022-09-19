import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.png'],
      manifest: {
        name: 'HabitsTracker',
        short_name: 'HabitsTracker',
        description: 'Habits tracker app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'brain192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'brain512.png',
            sizes: '512x512',
            type: 'image/png'
          },
					{
						src: 'brain192Mask.png',
            sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable'
					}
        ]
      }
		}),
	],
});
