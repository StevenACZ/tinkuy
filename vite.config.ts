import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// Sustituye "mi-repo" por el nombre de tu repositorio en GitHub
const repoName = 'tinkuy';

export default defineConfig({
  base: `/${repoName}/`, // ← Agrega esta línea
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
