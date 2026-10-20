import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // На Hostinger оптимізація через sharp вбиває процес (ліміти пам'яті/потоків),
  // тож картинки віддаються з public як є.
  images: { unoptimized: true },
  sassOptions: {
    // Дозволяє в будь-якому .module.scss писати `@use "variables" as *;`
    // замість довгих відносних шляхів на app/styles.
    loadPaths: [path.join(__dirname, "app", "styles")],
  },
};

export default nextConfig;
