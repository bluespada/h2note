import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import type { ElectronViteConfig } from 'electron-vite';
import path from 'path';

const config : ElectronViteConfig = {
  main: {
    build: {
      outDir: "out/main",
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, "electron/main.ts")
        }
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    build: {
      outDir: "out/preload",
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'electron/preload.ts')
        }
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    root: ".",
    build: {
      outDir: "out/renderer",
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html')
        }
      },
    },
    plugins: [
      externalizeDepsPlugin(),
    ]
  }
};

export default defineConfig(config);
