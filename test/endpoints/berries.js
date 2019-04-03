const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const schema = require('../schemas/berries_schema');

describe('Testing API PokeAPI Berries - GET', () => {
   it('GET - /api/v2/berry/ - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/berry/')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;

            err = Joi.validate(actual, schema.schemaS(), { abortEarly: false }).error
            assert.equal(err, null);


            done();
         });
   });
   it('GET - /api/v2/berry/{id}/ - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/berry/1/')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, schema.berry_id_schemaS(), { abortEarly: false }).error

            assert.equal(err, null);
            assert.equal(actual.id, 1);
            assert.equal(actual.name, "cheri");

            done();
         });
   });
   it('GET - /api/v2/berry-firmness/ - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/berry-firmness/')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, schema.schemaS(), { abortEarly: false }).error

            assert.equal(err, null);

            done();
         });
   });

   it('GET - /api/v2/berry-firmness/{id-or-name} - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/berry-firmness/very-soft')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, schema.berry_firmness_id_schemaS(), { abortEarly: false }).error

            assert.equal(err, null);
            assert.equal(actual.name, "very-soft")
            done();
         });
   });

});
