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
      override: {
        operations: {
          searchItems: {
            query: {
              useQuery: true,
              useInfinite: true,
              useInfiniteQueryParam: "cursor",
            },
          },
          getItems: {
            query: {
              useQuery: true,
              useInfinite: true,
              useInfiniteQueryParam: "cursor",
            },
          },
        },
      },
    },
  },
});
