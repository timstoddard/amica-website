const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  baseConfig: (mode = 'prod') => ({
    entry: [
      './src/client/index.tsx',
      './src/client/index.scss',
    ],
    output: {
      filename: 'bundle.js',
      path: `${__dirname}/../dist`,
      publicPath: '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          loader: 'source-map-loader',
          enforce: 'pre',
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: mode === 'prod' ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [autoprefixer],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', 'scss', '.json'],
    },
  }),
  sharedPlugins: (mode = 'prod') => {
    const htmlWebpackPluginOptions = {
      template: 'src/client/app.html',
      filename: '../index.html',
    }
    if (mode === 'prod') {
      htmlWebpackPluginOptions.minify = {
        collapseWhitespace: true,
        minifyJS: {
          mangle: false,
        },
        removeComments: true,
      }
    }
    return [
      new HtmlWebpackPlugin(htmlWebpackPluginOptions),
      new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    ]
  },
}
