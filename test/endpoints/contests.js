const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const barries_schema = require('../schemas/berries_schema');
const contests_schema = require('../schemas/contests_schema')

describe('Testing API PokeAPI Contests - GET', () => {
   it('GET - /api/v2/contest-type/ - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/contest-type/')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, barries_schema.schemaS(), { abortEarly: false }).error

            assert.equal(err, null);

            done();
         });
   });
   it('GET - /api/v2/contest-type/{id or name} - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/contest-type/1/')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, contests_schema.contests_id_schemaS(), { abortEarly: false }).error

            assert.equal(err, null);
            assert.equal(actual.id, 1);
            assert.equal(actual.name, "cool");

            done();
         });
   });
   it('GET - /api/v2/contest-effect/ - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/contest-effect/')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, barries_schema.schemaS(), { abortEarly: false }).error

            assert.equal(err, null);

            done();
         });
   });
   it('GET - /api/v2/contest-effect/{id}- 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/contest-effect/1')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, contests_schema.contest_effect_schemaS(), { abortEarly: false }).error

            assert.equal(err, null);

            done();
         });
   });

});
