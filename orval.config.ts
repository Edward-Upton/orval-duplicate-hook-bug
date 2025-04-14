import { defineConfig } from "orval";

export default defineConfig({
  paginatedApi: {
    input: {
      target: "./openapi.yaml",
    },
    output: {
      mode: "single",
      target: "src/index.ts",
      client: "react-query",
      prettier: true,
      mock: true,
    },
  },
});
