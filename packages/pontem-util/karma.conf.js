module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'test/*.js'
    ],
    preprocessors: {
      'test/*.js': ['env']
    },
    singleRun: true,
    plugins: [
      'karma-env-preprocessor',
      'karma-mocha'
    ],
    envPreprocessor: [
      'RANDOM_TESTS_REPEAT',
      'TRAVIS'
    ],
  })
}
