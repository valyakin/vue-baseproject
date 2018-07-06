const path = require('path')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('name', { type: String, required: true })
    this.sourceRoot(path.join(__dirname, '../templates/page/'))
  }

  writing () {
    const { name } = this.options
    const config = {
      name,
      kebabName: name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
    }
    this.fs.copyTpl(
      this.templatePath('Page.htm'),
      this.destinationPath(`src/pages/lib/${name}/${name}.htm`),
      config
    )
    this.fs.copyTpl(
      this.templatePath('Page.scss'),
      this.destinationPath(`src/pages/lib/${name}/${name}.scss`),
      config
    )
    this.fs.copyTpl(
      this.templatePath('Page.js'),
      this.destinationPath(`src/pages/lib/${name}/${name}.js`),
      config
    )
    this.fs.copyTpl(
      this.templatePath('Page.vue'),
      this.destinationPath(`src/pages/lib/${name}/${name}.vue`),
      config
    )
    this.fs.copy(
      this.destinationPath(`src/pages/index.js`),
      this.destinationPath(`src/pages/index.js`),
      {
        process: function (content) {
          return content.toString() + `export { default as ${name} } from './lib/${name}/${name}.vue'` + '\n'
        },
      }
    )
  }
}
