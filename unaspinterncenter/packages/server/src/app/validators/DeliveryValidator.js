const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  store: celebrate({
    [Segments.PARAMS]: Joi.object().keys({ id: Joi.number().required() }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().min(6).required(),
      description: Joi.string().min(6).required()
    })
  }),
  index: celebrate({
    [Segments.PARAMS]: Joi.object().keys({ id: Joi.number().required() })
  })
}
