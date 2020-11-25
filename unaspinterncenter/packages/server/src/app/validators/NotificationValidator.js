const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  index: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  })
}
