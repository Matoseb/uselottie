import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import path from "path";

const sharedConfig = {
  entryPoints: ["./src/uselottie/index.ts"],
  bundle: true,
  minify: true,
  treeShaking: true,
  outdir: "./build",
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
  plugins: [...sharedConfig.plugins, nodeExternalsPlugin()],
});

await esbuild.build({
  ...sharedConfig,
  platform: "browser",
  format: "esm",
  target: "es2020",
  outdir: path.join(sharedConfig.outdir, "bundle"),
});
