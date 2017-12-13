process.env.CHROME_BIN = require('puppeteer').executablePath();

let webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: './app/**/*.spec.ts', watched: false }
    ],
    exclude: [],
    webpack: webpackConfig,
    preprocessors: {
      './app/**/*.spec.ts': ['webpack']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],

    singleRun: true,
    concurrency: Infinity,

    plugins: [
        require('karma-webpack'),
        'karma-mocha',
        'karma-chai',
        'karma-spec-reporter',
        'karma-chrome-launcher'
    ]
  })
};
