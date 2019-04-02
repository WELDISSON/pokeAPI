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
  return schema
}

module.exports = {
    schemaS
}