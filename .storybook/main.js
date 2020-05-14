var path = require("path");

const custom = require("../webpack.common.js");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  webpackFinal: async (config, { configType }) => {
    config.module.alias = { ...config.resolve.alias, ...custom.module.alias };
    config.module.rules.push(...custom.module.rules);
    return config;
  }
};
