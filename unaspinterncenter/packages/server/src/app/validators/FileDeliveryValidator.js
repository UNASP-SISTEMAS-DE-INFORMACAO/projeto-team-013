const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  store: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().min(1).required(),
      delivery_id: Joi.number().min(1).required()
    })
  })
}
