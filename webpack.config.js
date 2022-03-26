const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./dist'] }
    })
  ],
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
