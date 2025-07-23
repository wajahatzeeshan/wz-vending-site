import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/wz-vending-site/', // <-- Add this line
  plugins: [react()],
});
