const Joi = require('joi')

schemaS = () => {
  let schema = Joi.object().keys({
    'count': Joi.number(),
    'next': Joi.string().allow(null),
    'previous': Joi.boolean().allow(null),
    'results': Joi.array().items(
        Joi.object().keys({
            'name': Joi.string(),
            'url': Joi.string()
        })
    )
  });
  return schema;
}

berry_id_schemaS = () => {
  let schema = Joi.object().keys({
    'firmness': Joi.object().keys({
      'name': Joi.string(),
      'url': Joi.string(),
    }),
    'flavors': Joi.array().items(
      Joi.object().keys({
        'lenght': Joi.number()
      }),
      Joi.object().keys({
        'flavor': Joi.object().keys({
          'name':Joi.string(),
          'url': Joi.string()
        }),
        'potency': Joi.number()
      })
      ),
    'growth_time': Joi.number(),
    'id': Joi.number(),
    'item': Joi.object().keys({
      'name': Joi.string(),
      'url': Joi.string()
    }),
    'max_harvest': Joi.number(),
    'name': Joi.string(),
    'natural_gift_power': Joi.number(),
    'natural_gift_type': Joi.object().keys({
      'name': Joi.string(),
      'url': Joi.string()
    }),
    'size': Joi.number(),
    'smoothness': Joi.number(),
    'soil_dryness': Joi.number()
  });

  return schema;
}

berry_firmness_id_schemaS = () => {
  schema = Joi.object().keys({
    'berries': Joi.array().items(
      Joi.object().keys({
        'length': Joi.number()
      }),
      Joi.object().keys({
        'name': Joi.string(),
        'url': Joi.string()
      })
    ),
    'id': Joi.number(),
    'name': Joi.string(),
    'names': Joi. array().items(
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
    )
  });

  return schema;
}

module.exports = {
    schemaS, berry_id_schemaS, berry_firmness_id_schemaS
}