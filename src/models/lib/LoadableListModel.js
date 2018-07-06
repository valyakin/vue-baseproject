import Joi from 'joi'
import AbstractModel from './AbstractModel'

const schemaFactory = (type) => ({
  isLoading: Joi.boolean().required(),
  isLoaded: Joi.boolean().required(),
  value: Joi.array().items(Joi.object().type(type)),
})

export default class LoadableListModel extends AbstractModel {
  constructor (type, data = {
    isLoaded: false,
    isLoading: false,
    value: [],
  }, options) {
    super(data, schemaFactory(type), options)
    this.type = type
    Object.freeze(this)
  }

  loaded (...value) {
    return new LoadableListModel(this.type, {
      isLoaded: true,
      isLoading: false,
      value,
    })
  }

  loading () {
    return new LoadableListModel(this.type, {
      isLoaded: this.isLoaded,
      isLoading: true,
      value: this.value,
    })
  }
}
