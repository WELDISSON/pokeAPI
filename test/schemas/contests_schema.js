const Joi = require('joi')

contests_id_schemaS = () => {
  schema = Joi.object().keys({
    'berry_flavor': Joi.object().keys({
        'name': Joi.string(),
        'url': Joi.string()
      }),
    'id': Joi.number(),
    'name': Joi.string(),
    'names': Joi. array().items(
      Joi.object().keys({
        'length': Joi.number()
      }),
      Joi.object().keys({
        'name': Joi.string(),
        'color': Joi.string(),
        'language': Joi.object().keys({
          'name': Joi.string(),
          'url': Joi.string()
        })
      })
    )
  });

  return schema;
}

module.exports = {
    contests_id_schemaS
}