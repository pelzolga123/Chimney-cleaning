const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: ['./src/index.js',
          './src/sass/style.scss'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test:  /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
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
};
