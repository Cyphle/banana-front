import { defineConfig } from '@farmfe/core';

export default defineConfig({
  plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass'],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: (path: any) => path.replace(/^\/api/, ""),
      },
    },
  },
});
