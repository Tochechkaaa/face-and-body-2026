import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Hostinger запускає .next/standalone/server.js як вхідний файл.
  output: "standalone",
  sassOptions: {
    // Дозволяє в будь-якому .module.scss писати `@use "variables" as *;`
    // замість довгих відносних шляхів на app/styles.
    loadPaths: [path.join(__dirname, "app", "styles")],
  },
};

export default nextConfig;
