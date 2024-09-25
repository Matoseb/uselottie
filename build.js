import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import path from "path";
import pkg from "npm-dts";

const ENTRY = "./src/uselottie/index.ts";
const OUT_DIR = "./build";

new pkg.Generator({
  entry: ENTRY,
  output: path.join(OUT_DIR, "index.d.ts"),
}).generate();

const sharedConfig = {
  entryPoints: [ENTRY],
  bundle: true,
  minify: true,
  keepNames: true,
  sourcemap: true,
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
  ],
});

await esbuild.build({
  ...sharedConfig,
  platform: "browser",
  format: "esm",
  target: "es2020",
  outdir: path.join(sharedConfig.outdir, "bundle"),
});
