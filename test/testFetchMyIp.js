// test/iss.test.js
const { fetchMyIP } = require('../iss');
const { expect } = require('chai');

describe('fetchMyIP', function() {
  it('should return a string', function(done) {
    fetchMyIP((error, ip) => {
      expect(error).to.be.null;
      expect(ip).to.be.a('string');
      done();
    });
  });
});
