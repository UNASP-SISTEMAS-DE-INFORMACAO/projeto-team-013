const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  store: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().min(1).required(),
      delivery_id: Joi.number().min(1).required()
    })
  }),
  updateStatus: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().min(1).required(),
      delivery_id: Joi.number().min(1).required(),
      file_delivery_id: Joi.number().min(1).required()
    }),
    [Segments.BODY]: Joi.object().keys({
      status: Joi.string()
        .valid('analyzing', 'approved', 'disapproved')
        .required()
    })
  }),
  index: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().min(1).required(),
      delivery_id: Joi.number().min(1).required()
    }),
    [Segments.QUERY]: Joi.object().keys({
      status: Joi.string().valid('analyzing', 'approved', 'disapproved')
    })
  })
}
