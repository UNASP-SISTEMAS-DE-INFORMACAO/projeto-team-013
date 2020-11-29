const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  index: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object().keys({
      notifications: Joi.array().required()
    })
  })
}
