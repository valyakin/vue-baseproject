const Joi = require('joi-browser')
const AbstractModel = require('./AbstractModel')

const schemaFactory = (type) => ({
  isLoading: Joi.boolean().required(),
  isLoaded: Joi.boolean().required(),
  value: Joi.object().type(type).allow(null)
})

module.exports.schemaFactory = schemaFactory

module.exports = class LoadableModel extends AbstractModel {
  constructor (type, data = {
    isLoading: true,
    isLoaded: false,
    value: null
  }, options) {
    super(data, schemaFactory(type), options)
    this.type = type
    Object.freeze(this)
  }

  loaded (value) {
    return new LoadableModel(this.type, {
      isLoaded: true,
      isLoading: false,
      value
    })
  }

  loading () {
    return new LoadableModel(this.type, {
      isLoaded: this.isLoaded,
      isLoading: true,
      value: this.value
    })
  }
}
