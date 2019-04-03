const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const berries_schema = require('../schemas/berries_schema');

describe('Testing API PokeAPI endpoint /ability - GET', () => {
  it('Validating all abilities - GET /api/v2/ability/', done => {
    request('https://pokeapi.co')
      .get('/api/v2/ability/')
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        let actual = res.body;
        err = Joi.validate(actual, berries_schema.schemaS(), { abortEarly: false }).error

        assert.equal(err, null);

        done();
      })

  });
});
