const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(6).required(),
      description: Joi.string().min(6).required(),
      id_course: Joi.number().required()
    })
  }),
  exclude:celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id:Joi.number().min(1).required(),
  index: celebrate({
    [Segments.QUERY]: Joi.object().keys({ course: Joi.number() })
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({ id: Joi.number().required() }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(6),
      description: Joi.string().min(6),
      id_course: Joi.number()
    })
  })
}
