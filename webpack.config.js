const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/main.js',
 //   'dependencies': ['phaser']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'game.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',{'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'html/index.html'),to: path.resolve(__dirname, 'build')},
      {from: path.resolve(__dirname,"css/*"),to: path.resolve(__dirname,'build')},
      {from: path.resolve(__dirname,"assets","**",'*'),to: path.resolve(__dirname,'build')}
    ]),

    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(false),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    })

/**
 * @TODO: DELETE THIS BLOCK
 *
 * new webpack.optimize.CommonsChunkPlugin({
 *   name: 'dependencies',
 *   filename: 'dependencies.bundle.js'
 *  })
 */
  ],

  optimization: {
    splitChunks:{
      cacheGroups: {
/*	main: {
	  name: "./src/main.js",
	  filename: "game.bundle.js"
	},
*/
        "dependencies": {
	  test: /[\\/]node_modules[\\/]/,
	  name: "phaser",
	  chunks: "all",
          filename: 'dependencies.bundle.js'
        }                                                                                      }
    }
  },
}
