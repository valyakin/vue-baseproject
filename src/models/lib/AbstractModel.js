import Joi from 'joi'

class AbstractModel {
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
      // eslint-disable-next-line no-console
      console.error(e.message, e.stack, data)
      throw e
    }
  }
}

export default AbstractModel
