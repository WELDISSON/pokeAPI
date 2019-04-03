const Joi = require('joi')

encounters_id_schemaS = () => {
  let schema = Joi.object().keys({
    'id': Joi.number(),
    'name': Joi.string(),
    'names': Joi.array().items(
      Joi.object().keys({
        'length': Joi.number()
      }),
      Joi.object().keys({
        'name': Joi.string(),
        'language': Joi.object().keys({
          'name': Joi.string(),
          'url': Joi.string()
        })
      })
    ),
    'order': Joi.number()
  });

  return schema;
}

encounter_condition_schemaS = () => {
  let schema = Joi.object().keys({
    'id': Joi.number(),
    'name': Joi.string(),
    'names': Joi.array().items(
      Joi.object().keys({
        'length': Joi.number()
      }),
      Joi.object().keys({
        'name': Joi.string(),
        'language': Joi.object().keys({
          'name': Joi.string(),
          'url': Joi.string()
        })
      })
    ),
    'values': Joi.array().items(
      Joi.object().keys({
        'length': Joi.number()
      }),
      Joi.object().keys({
        'name': Joi.string(),
        'url': Joi.string()
      })
    ),
  });

  return schema;
}

module.exports = {
  encounters_id_schemaS, encounter_condition_schemaS
}