import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'node:path';
import viteSharp from 'vite-plugin-sharp';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSharp({
      filter: /\.(png|jpg)$/, //Target png and jpg files
      compress: {
        webp: { quality: 80 }, // Convert to webp with 80% quality
      },
      cache: '.vite-cache/images',
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@reusable': path.resolve(__dirname, 'src/components/reusable'),
      '@sections': path.resolve(__dirname, 'src/components/sections'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/tokens.scss" as *;`
  //     }
  //   }
  // },
  esbuild: {
    logLevel: 'error', // Cache les warnings
  },
});
