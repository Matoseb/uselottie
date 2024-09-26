import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import cleanup from "rollup-plugin-cleanup";
import path from "path";
import fs from "fs";

const OUT_DIR = "dist";
const IN_DIR = "examples";
const USELOTTIE_URL =
  "https://unpkg.com/@matoseb/uselottie/build/bundle/index.js";

const isDev = process.env.NODE_ENV === "development";

function getHtmlEntries(root = IN_DIR) {
  const pagesDir = path.resolve(__dirname, root);
  const entries = {};

  const files = fs.readdirSync(pagesDir, { recursive: true });
  const htmlFiles = files.filter((file) => file.endsWith(".html"));

  htmlFiles.forEach((file) => {
    // let name = file.replaceAll("/", "-");
    let name = file;
    name = name.replace("/index.html", ".html");
    // remove the extension last regex
    name = name.replace(/\.html$/, "");

    entries[name] = path.resolve(pagesDir, file);
  });

  return entries;
}

function isRoot(infos) {
  return (
    path.parse(infos.name).name === "index" && path.dirname(infos.name) === "."
  );
}

function fileName(infos) {
  return path.basename(infos.name);
}

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: IN_DIR,
  base: "./",
  build: {
    modulePreload: { polyfill: false },
    outDir: path.join("../", OUT_DIR),
    emptyOutDir: true, // also necessary
    minify: false,

    rollupOptions: {
      external: ["@matoseb/uselottie"],
      input: getHtmlEntries(),
      output: {
        paths: {
          "@matoseb/uselottie": USELOTTIE_URL,
        },
        manualChunks: {},
        entryFileNames: (infos) =>
          `${isRoot(infos) ? "index" : `[name]/${fileName(infos)}`}.js`,
        assetFileNames: (infos) => {
          if (isRoot(infos)) return "index[extname]";

          const { dir } = path.parse(infos.originalFileName || "");
          const name = path.basename(dir);
          return `${dir}/${name}[extname]`; //! can de-duplicate if same content
          // assetFileNames: `style/[name][extname]`,
        },
      },
      plugins: [
        cleanup({
          maxEmptyLines: 1,
        }),
      ],
    },
  },
  esbuild: isDev ? true : false, // disable to prevent esbuild full minification
  experimental: {
    renderBuiltUrl(filename, { hostId, hostType, type }) {
      const folder = path.dirname(hostId);
      const fileFolder = path.dirname(filename);

      if (folder === fileFolder) {
        return `./${path.basename(filename)}`;
      }
    },
  },
  plugins: [tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern", "legacy"
      },
    },
  },
});
