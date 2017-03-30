import * as path from "path";
import * as webpack from "webpack";
export const CONTEXT_PATH: string = path.join(__dirname, "..", "client");
export const OUT_PATH: string = path.join(__dirname, "dist");
export const PORT: number = 2017;

export default {
  context: CONTEXT_PATH,
  entry: {
    app: "./app.ts"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        test: /\.ts?$/
      }
    ]
  },
  output: {
    filename: "js/[name].js",
    path: OUT_PATH
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(__dirname, "..", "client")
    )
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }
};
