const webpack = require('webpack'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.ts',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name]-[hash:6].bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'assets/images/',
          name: "[name].[hash].[ext]"
        }
      }


    ]

  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      SVG: 'svg.js'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]


}
