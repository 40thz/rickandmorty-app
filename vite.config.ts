import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@containers', replacement: path.resolve(__dirname, 'src/containers') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
    ],
  },
});
