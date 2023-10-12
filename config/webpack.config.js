const defaultWebpackConfig = require("@cx/core/config/webpack.config");
const { merge } = require("webpack-merge");

/**
 * The webpack configuration for the application.
 * Add custom webpack configuration to the appConfig object.
 */
const webpackConfig = () => {
  const appConfig = {};
  return merge(defaultWebpackConfig(), appConfig);
};
module.exports = webpackConfig;
