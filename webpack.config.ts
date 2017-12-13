import * as webpack from 'webpack';

const config: webpack.Configuration = {};

config.context = __dirname + '/app';
config.entry = './index.ts';

config.output = {
  path: __dirname + '/dist',
  filename: 'bundle.js',
  publicPath: '/dist'
};

config.resolve = {
  extensions: [
    '.json',
    '.tsx',
    '.ts',
    '.js'
  ],
};

config.devtool = 'source-map';

config.module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/
    }
  ]
};

module.exports = config;