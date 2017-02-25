var pkg = require('../package.json');
// var testConfig = require('../configuration/test-config');

module.exports = function(config) {
  config.set({
    basePath: '../',
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'test/**/*.js'
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
