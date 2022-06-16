import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

import { viteSingleFile } from "./singleFile";

export default defineConfig({
  build: {
    assetsInlineLimit: 9999999,
    chunkSizeWarningLimit: 99999999
  },
  plugins: [
    react(),
    paths(),
    viteSingleFile({ useRecommendedBuildConfig: true })
  ]
});
