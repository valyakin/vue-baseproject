const Joi = require('joi-browser')

module.exports = class AbstractModel {
  constructor (data, schema, options = {}) {
    try {
      const { error, value } = Joi.validate(
        (data instanceof Function) ? data(this) : data,
        (schema instanceof Function) ? schema() : schema,
        options
      )
      if (error) {
        throw new Error(`[${this.constructor.name}].${error}`)
      }
      Object.assign(this, value)
    } catch (e) {
      console.log(e.message, e.stack, data)
      throw e
    }
  }

  static buildArray (array, buildItem, context) {
    return array == null
      ? null
      : array.map(item => buildItem(item, context))
  }
}
