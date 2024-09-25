import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import path from "path";
import { fileURLToPath } from "url";

import esbuildPluginTsc from "esbuild-plugin-tsc";
import pkg from "npm-dts";

const ENTRY = "./src/uselottie/index.ts";
const OUT_DIR = "./build";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// new pkg.Generator({
//   entry: ENTRY,
//   output: path.join(OUT_DIR, "index.d.ts"),
// }).generate();

const sharedConfig = {
  entryPoints: [ENTRY],
  bundle: true,
  minify: true,
  treeShaking: true,
  outdir: OUT_DIR,
  plugins: [
    sassPlugin({
      type: "css-text",
    }),
  ],
};

await esbuild.build({
  ...sharedConfig,
  platform: "node",
  format: "cjs",
  target: "node14",
  plugins: [
    ...sharedConfig.plugins,
    nodeExternalsPlugin(),
    esbuildPluginTsc({
      tsconfig: path.join(__dirname, "tsconfig.json"),
    }),
  ],
});

await esbuild.build({
  ...sharedConfig,
  platform: "browser",
  format: "esm",
  target: "es2020",
  outdir: path.join(sharedConfig.outdir, "bundle"),
});
