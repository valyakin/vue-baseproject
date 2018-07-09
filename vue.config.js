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
        'vue$': 'vue/dist/vue.esm.js',
        'src': resolve('src'),
        'joi': 'joi-browser',
      },
    },
    plugins: [
      new StyleLintPlugin(),
    ],
  },
}
