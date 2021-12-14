const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
  module: {
    rules: [
/*       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }, */
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
      /*       {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      }, */
      /*       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }, */

      /* {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/",
              useRelativePath: true,
            },
          },
        ],
      }, */
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html.ejs",
    }),
    /* new HtmlWebpackInlineSVGPlugin({
      svgoConfig: [
        {
          removeViewBox: true,
        },
      ],
    }), */
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/just_copy"},
      ],
    }),
  ],
};
