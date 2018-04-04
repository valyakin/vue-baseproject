const Generator = require('yeoman-generator')
const path = require('path')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('name', { type: String, required: true })
    this.sourceRoot(path.join(__dirname, '../templates/component/'))
  }

  writing () {
    const { name } = this.options
    const config = {
      name,
      kebabName: name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    }
    this.fs.copyTpl(
      this.templatePath('Component.htm'),
      this.destinationPath(`src/components/lib/${name}/${name}.htm`),
      config
    )
    this.fs.copyTpl(
      this.templatePath('Component.scss'),
      this.destinationPath(`src/components/lib/${name}/${name}.scss`),
      config
    )
    this.fs.copyTpl(
      this.templatePath('Component.js'),
      this.destinationPath(`src/components/lib/${name}/${name}.js`),
      config
    )
    this.fs.copyTpl(
      this.templatePath('Component.vue'),
      this.destinationPath(`src/components/lib/${name}/${name}.vue`),
      config
    )
    this.fs.copy(
      this.destinationPath(`src/components/index.js`),
      this.destinationPath(`src/components/index.js`),
      {
        process: function (content) {
          return content.toString() + `export { default as ${name} } from './lib/${name}/${name}.vue'` + '\n'
        }
      }
    )
    this.fs.copy(
      this.destinationPath(`src/stories/index.stories.js`),
      this.destinationPath(`src/stories/index.stories.js`),
      {
        process: function (content) {
          return content.toString() +
            '\n' + `storiesOf('components/${config.name}', module)` +
            '\n' + `  .addDecorator(CenterDecorator)` +
            '\n' + `  .add('normal', storyFrom(function (h) { return <${config.kebabName} /> }))` +
            '\n'
        }
      }
    )
  }
}
