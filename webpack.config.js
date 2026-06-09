const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      background: {
        import: './src/background/background.js',
        filename: 'background.js'
      },
      popup: {
        import: './src/popup/popup.js',
        filename: 'popup.js'
      }
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: aliases(),
    },
    module: {
      rules: rules(),
    },
    plugins: plugins(),
  }
}

const rules = () => {
  return [js(), scssModule(), scssGlobal(), images()]
}

const js = () => {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  }
}

const scssModule = () => {
  return {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true
        },
      },
      'sass-loader',
    ],
    include: /\.mod\.scss$/,
  }
}

const scssGlobal = () => {
  return {
    test: /\.(css|scss)$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    exclude: /\.mod\.scss$/,
  }
}

function images() {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets',
        },
      },
    ],
  }
}

const plugins = () => {
  return [
    new CopyPlugin({
      patterns: [
        './src/manifest.json',
        {
          from: './src/assets',
          to: 'assets/',
          // Keep design sources in the repo but out of the shipped bundle.
          globOptions: {
            ignore: [
              '**/.DS_Store',
              '**/*.xcf',
              '**/fontsvgs/**',
              '**/bar_icon_1024.png',
            ],
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: path.resolve(__dirname, 'src', 'popup', 'index.html'),
      chunks: ['popup'],
    }),
    new MiniCssExtractPlugin()
  ]
}

let aliases = () => {
  return {
    popup: path.resolve(__dirname, 'src/popup'),
    event: path.resolve(__dirname, 'src/event'),
    icons: path.resolve(__dirname, 'src/modules/icons'),
    input: path.resolve(__dirname, 'src/modules/input'),
    models: path.resolve(__dirname, 'src/models'),
    scripts: path.resolve(__dirname, 'src/scripts'),
    storage: path.resolve(__dirname, 'src/utils/storage'),
    theme: path.resolve(__dirname, 'src/theme'),
    assets: path.resolve(__dirname, 'src/assets'),
    config: path.resolve(__dirname, 'src/popup/app/config'),
    ref: path.resolve(__dirname, 'src/popup/app/ref'),
  }
}
