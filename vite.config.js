import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';i

export default defineConfig({
  plugins: [react()],
  resolve: {n
    alias: {
      '@': '/src',
    },
  },
});