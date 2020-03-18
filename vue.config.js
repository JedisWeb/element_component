const path = require("path");

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias.set("@ele", path.resolve(__dirname, "src/components/element"));
  }
};
