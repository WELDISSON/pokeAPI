const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const poke = require('./../schemas/poke_schema');

describe('Testing API PokeAPI - GET', () => {
  it('Validating all endpoints - GET /api/v2/', done => {
    request('https://pokeapi.co')
      .get('/api/v2/')
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        let actual = res.body;

        err = Joi.validate(actual, poke.schemaS(), { abortEarly: false }).error
        assert.equal(err, null);

        done();
      });

  });
});
