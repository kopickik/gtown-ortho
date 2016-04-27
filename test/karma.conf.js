module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
    frameworks: ['jasmine'],
    files: [
      'spec/nonexistent.js'
    ],
    exclude: [
    ],
    preprocessors: {},
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
