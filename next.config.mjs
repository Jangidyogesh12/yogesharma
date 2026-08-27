import { fileURLToPath } from "node:url";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  turbopack: {
    root: fileURLToPath(new URL("./", import.meta.url)),
  },
  experimental: {
    mdxRs: { mdxType: "gfm" },
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
