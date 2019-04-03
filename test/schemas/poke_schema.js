const Joi = require('joi')

schemaS = () => {
  let schema = Joi.object().keys({
    'ability': Joi.string(),
    'berry': Joi.string(),
    'berry-firmness': Joi.string(),
    'berry-flavor': Joi.string(),
    'characteristic': Joi.string(),
    'contest-effect': Joi.string(),
    'contest-type': Joi.string(),
    'egg-group': Joi.string(),
    'encounter-condition': Joi.string(),
    'encounter-condition-value': Joi.string(),
    'encounter-method': Joi.string(),
    'evolution-chain': Joi.string(),
    'evolution-trigger': Joi.string(),
    'gender': Joi.string(),
    'generation': Joi.string(),
    'growth-rate': Joi.string(),
    'item': Joi.string(),
    'item-attribute': Joi.string(),
    'item-category': Joi.string(),
    'item-fling-effect': Joi.string(),
    'item-pocket': Joi.string(),
    'language': Joi.string(),
    'location': Joi.string(),
    'location-area': Joi.string(),
    'machine': Joi.string(),
    'move': Joi.string(),
    'move-ailment': Joi.string(),
    'move-battle-style': Joi.string(),
    'move-category': Joi.string(),
    'move-damage-class': Joi.string(),
    'move-learn-method': Joi.string(),
    'move-target': Joi.string(),
    'nature': Joi.string(),
    'pal-park-area': Joi.string(),
    'pokeathlon-stat': Joi.string(),
    'pokedex': Joi.string(),
    'pokemon': Joi.string(),
    'pokemon-color': Joi.string(),
    'pokemon-form': Joi.string(),
    'pokemon-habitat': Joi.string(),
    'pokemon-shape': Joi.string(),
    'pokemon-species': Joi.string(),
    'region': Joi.string(),
    'stat': Joi.string(),
    'super-contest-effect': Joi.string(),
    'type': Joi.string(),
    'version': Joi.string(),
    'version-group': Joi.string(),

  });
  return schema
}

module.exports = {
  schemaS
}