// unit tests entry point used by karma-webpack plugin loader
var testsContext = require.context(".", true, /-test$/);
testsContext.keys().forEach(testsContext);
