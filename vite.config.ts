/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import { presetUno, presetAttributify } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      theme: {
        colors: {
          emerald: {
            "50": "#edf4f2",
            "100": "#ccefed",
            "200": "#93e8d7",
            "300": "#58cfad",
            "400": "#1eb27e",
            "500": "#159955",
            "600": "#138440",
            "700": "#136635",
            "800": "#0f4729",
            "900": "#0b2c21",
          },
        },
        breakpoints: {
          xs: "320px",
          sm: "640px",
        },
      },
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno({}),
      ],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    outputFile: "junit.xml",
  },
});
