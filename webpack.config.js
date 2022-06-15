const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
    return {
        mode: "production",
        devtool: "source-map",
        entry: {
            background: {
                import: './src/background/index.js',
                filename: 'background.js'
            },
            content: {
                import: './src/content/index.js',
                filename: 'content.js'
            },
            options: {
                import: './src/options/index.js',
                filename: 'options.js'
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
       },
       plugins: [
        new CopyPlugin({
          patterns: [
            "./src/manifest.json",
            "./src/options/options.css",
            { from: "./src/assets", to: "assets/" }
          ],
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "options.html",
            template: path.resolve(__dirname, "src", "options", "index.html"),
            chunks: ["options"]
        })
      ]
    }
}