import type { Configuration } from "webpack";
import * as HTMLWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: "./src/index.tsx",
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new HTMLWebpackPlugin()],
};

export default config;
