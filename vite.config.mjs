import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/wz-vending-site/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});