// Dedicated Node SSR build for prerendering. Keep this separate from the
// browser Vite config, which Wrangler can auto-configure for Cloudflare Workers.
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
  build: {
    target: 'node22',
    outDir: 'dist-server',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'entry-server.js',
      },
    },
  },
});
