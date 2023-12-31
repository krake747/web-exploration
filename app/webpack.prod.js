const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
    mode: "production",
    devtool: false,
    performance: {
        hints: false
    }
});
