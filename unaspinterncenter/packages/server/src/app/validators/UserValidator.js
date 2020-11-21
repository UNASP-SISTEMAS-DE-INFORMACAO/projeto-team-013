const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      ra: Joi.number().required(),
      id_course: Joi.number().required(),
      email: Joi.string().email().required(),
      name: Joi.string().min(6).max(150).required(),
      password: Joi.string().min(8).required(),
      is_admin: Joi.boolean()
    })
  }),

  login: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
  }),
  index: celebrate({
    [Segments.QUERY]: Joi.object().keys({ id_course: Joi.number() })
  }),
  show: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.number().required()
    })
  })
}
