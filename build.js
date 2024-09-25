import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

await esbuild.build({
  entryPoints: ["./src/uselottie/index.ts"],
  bundle: true,
  minify: true,
//   outfile: "uselottie.js",

  outdir: "./build/",
  plugins: [sassPlugin({
    type: "css-text",
  })],
});
