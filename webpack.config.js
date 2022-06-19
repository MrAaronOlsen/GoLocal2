const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      background: {
        import: './src/background/index.js',
        filename: 'background.js',
      },
      content: {
        import: './src/content/index.js',
        filename: 'content.js',
      },
      popup: {
        import: './src/popup/index.js',
        filename: 'popup.js',
      },
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
  return [js(), scssModule(), scssGlobal()]
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
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
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
    use: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /\.mod\.scss$/,
  }
}

const plugins = () => {
  return [
    new CopyPlugin({
      patterns: [
        './src/manifest.json',
        { from: './src/assets', to: 'assets/' },
      ],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: path.resolve(__dirname, 'src', 'popup', 'index.html'),
      chunks: ['popup'],
    }),
  ]
}

let aliases = () => {
  return {
    input: path.resolve(__dirname, 'src/modules/input'),
    models: path.resolve(__dirname, 'src/models'),
    storage: path.resolve(__dirname, 'src/utils/storage'),
  }
}
