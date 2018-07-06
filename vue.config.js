const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'src': resolve('src'),
        'joi': 'joi-browser',
      },
    },
    plugins: [
      new StyleLintPlugin(),
    ],
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
}
