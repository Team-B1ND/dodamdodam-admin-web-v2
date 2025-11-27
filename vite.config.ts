import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    vitePluginSvgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // force all imports of react/react-dom/jsx-runtime to the single copy in this repo
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime'),
    },
  },
})
