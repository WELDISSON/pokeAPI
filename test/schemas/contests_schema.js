const Joi = require('joi')

contests_id_schemaS = () => {
  let schema = Joi.object().keys({
    'berry_flavor': Joi.object().keys({
      'name': Joi.string(),
      'url': Joi.string()
    }),
    'id': Joi.number(),
    'name': Joi.string(),
    'names': Joi.array().items(
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
contest_effect_schemaS = () => {
  let schema = Joi.object().keys({
    'appeal': Joi.number(),
    'effect_entries': Joi.array().items(
      Joi.object().keys({
        'effect': Joi.string(),
        'language': Joi.object().keys({
          'name': Joi.string(),
          'url': Joi.string()
        })
      })
    ),
    'flavor_text_entries': Joi.array().items(
      Joi.object().keys({
        'length': Joi.number()
      }),
      Joi.object().keys({
        'flavor_text': Joi.string(),
        'language': Joi.object().keys({
          'name': Joi.string(),
          'url': Joi.string()
        })
      })
    ),
    'id': Joi.number(),
    'jam': Joi.number()
  });

  return schema;
}
module.exports = {
  contests_id_schemaS, contest_effect_schemaS
}