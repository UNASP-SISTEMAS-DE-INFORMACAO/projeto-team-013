const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      ra: Joi.number().required(),
      id_course: Joi.number().required(),
      email: Joi.string().email().required(),
      name: Joi.string().min(6).max(150).required(),
      password: Joi.string().min(8).required()
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
    [Segments.PARAMS]: Joi.object().keys({
      ra: Joi.number().required()
    })
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      ra: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(6).max(150),
      password: Joi.string().min(8),
      expo_token: Joi.string()
    })
  })
}
