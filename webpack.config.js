const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
          { loader:  'css-loader'},
          { loader:  'sass-loader'},
          { loader:  'style-loader'},
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

};
