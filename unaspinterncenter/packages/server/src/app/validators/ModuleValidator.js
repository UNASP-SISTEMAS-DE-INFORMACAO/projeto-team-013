const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(6).required(),
      description: Joi.string().min(6).required(),
      id_course: Joi.number().required()
    })
  })
}
