const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const defaultInclude = path.resolve(__dirname, "src");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: "babel-loader" }],
        resolve: {
          extensions: [".js", ".jsx"],
        },
        include: defaultInclude,
      },
      {
        test: /\.module\.scss/,

        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          }, 
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devtool: false,
  devServer: {
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, "build"),
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
  },
};
