import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    // Enable JSX in .js files
    jsxRuntime: 'classic',
    include: '**/*.js',
  })],
  server: {
    open: true
  }
});