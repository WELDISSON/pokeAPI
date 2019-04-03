const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const barries_schema = require('../schemas/berries_schema');
const encounter_schema = require('../schemas/encounter_schema')

describe('Testing API PokeAPI Enconters - GET', () => {
   it('GET - /api/v2/encounter-method/ - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/encounter-method/')
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
   it('GET - /api/v2/encounter-method/{id} - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/encounter-method/1')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, encounter_schema.encounters_id_schemaS(), { abortEarly: false }).error

            assert.equal(err, null);
            assert.equal(actual.id, 1);
            assert.equal(actual.name, "walk");

            done();
         });
   });
   it('GET - /api/v2/encounter-condition/{id} - 200', done => {
      request('https://pokeapi.co')
         .get('/api/v2/encounter-condition/1')
         .expect('content-type', 'application/json; charset=utf-8')
         .expect(200)
         .end((err, res) => {
            if (err) return done(err);
            let actual = res.body;
            err = Joi.validate(actual, encounter_schema.encounter_condition_schemaS(), { abortEarly: false }).error

            assert.equal(err, null);
            assert.equal(actual.id, 1);
            assert.equal(actual.name, "swarm");

            done();
         });
   });
});


