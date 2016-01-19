'use strict';

require('dotenv').load();

const chai = require('chai')
  , locate = require('../')
  ;

chai.should();

describe('MakerBot Address Service tests', () => {
  it('should return results from Google', done => {
    locate('11201', done);
  });

  it('should return an array', done => {
    locate('11201', (err, result) => {
      result.should.be.an('array');
      done(err);
    });
  });

  it('first result should be New York, United States', done => {
    locate('11201', (err, result) => {
      result[0].city.should.eq('New York');
      result[0].country.should.eq('United States');
      done(err);
    });
  });
})
