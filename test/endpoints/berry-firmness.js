const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const endpoint = require('./../schemas/endpoint_schema');

describe('Testing API PokeAPI endpoint /berry - GET', () => {
  it('Validating all berries - GET /api/v2/berry-firmness/', done => {
    request('https://pokeapi.co')
     .get('/api/v2/berry-firmness/')
     .expect('content-type', 'application/json; charset=utf-8')
     .expect(200)
     .end((err, res) => {
        if (err) return done(err); 
        let actual = res.body;

        err = Joi.validate(actual, endpoint.schemaS(), { abortEarly: false }).error
        assert.equal(err, null);


        done();
     })
    
  });
});
