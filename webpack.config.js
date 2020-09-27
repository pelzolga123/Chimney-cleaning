const path = require('path');
const webpack = require("webpack");
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/main.js',
    './src/style.css'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      },

      {
        test: /\.(s?)css$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
     },

      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },

      {
        test: /\.ico$/,
        loader: 'file-loader'
      },
    ],
  },


  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   })
  ],

  plugins: [
    new miniCss({
       filename: 'style.css',
    }),
 ],
};
