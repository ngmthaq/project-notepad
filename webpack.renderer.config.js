const path = require("path");

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules: require("./webpack.rules"),
  },
  plugins: require("./webpack.plugins"),
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "./src"),
      "utils": path.resolve(__dirname, "./utils"),
      "const": path.resolve(__dirname, "./const"),
      "database": path.resolve(__dirname, "./database"),
    },
    extensions: [".js", ".jsx"],
  },
};
