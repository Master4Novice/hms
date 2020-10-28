const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const hmsConfig = (nodeEnv) => {
  return {
     entry: './src/main/index.js',
     resolve: {
       modules: [path.resolve('./src'), 'node_modules'],
       extensions: ['.js', '.css', '.html', '*']
     },
     module: {
       rules: [
         {
           test: /\.(js|jsx)$/,
           exclude: /(node_modules|bower_components)/,
           use: ['babel-loader', 'eslint-loader'],
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
       ],
     },
     plugins: [
       new webpack.EnvironmentPlugin({
         NODE_ENV: nodeEnv
       }),
       new CopyWebpackPlugin({
         patterns: [
           {
             from: __dirname + '/src/main/images',
             to: 'images'
           },
           {
             from: __dirname + '/src/main/css',
             to: 'css'
           }
         ],
       }),
       new HtmlWebpackPlugin({
         template: 'src/main/index.html'
       })
     ],
     optimization: {
       splitChunks: {
         cacheGroups: {
           vendors: {
             test: /[\\/]node_modules[\\/]/,
             name: 'vendors',
             chunks: 'all',
             minSize: 20000
           },
         },
       },
       minimizer: [
         new UglifyJsPlugin({
           cache: true,
           parallel: true,
           sourceMap: true
         })
       ]
     },
     performance: {
       hints: false
     }
  };
};

const hmsDevConfig = {
   devtool: 'inline-source-map',
   output: {
     path: path.resolve(__dirname, 'build/'),
     publicPath: '/',
     filename: '[name].hms-bundle.js',
   },
   devServer: {
     contentBase: path.join(__dirname, 'src/main'),
     port: 9000,
     host: 'localhost',
     disableHostCheck: true,
     hotOnly: true,
     historyApiFallback: {
       disableDotRule: true
     },
     stats: 'minimal',
     overlay: true,
     proxy: {
       '/api/**' : {
         target: {
           port: 8080
         },
         secure: false
       }
     }
   },
   plugins: [
   	 new webpack.HotModuleReplacementPlugin()
   ]
};

const hmsProdConfig = {
   devtool: 'source-map',
   output: {
     path: path.join(__dirname, 'target/build/'),
     publicPath: '/',
     filename: '[name].[hash].hms-bundle.js',
   }
};

module.exports = (env, argv) => {
  console.info('NODE-ENV ->', argv.mode);
  return argv.mode === 'production' ? merge(hmsConfig(argv.mode), hmsProdConfig) : merge(hmsConfig(argv.mode), hmsDevConfig);
};
