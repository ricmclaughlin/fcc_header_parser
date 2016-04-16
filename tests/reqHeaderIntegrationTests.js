var should = require('should');
var app = require('../app.js');
var request = require('supertest')(app);

describe('Request Header Parsing Microservice', function () {

  it('should show the explanation page if no parameters are given', function (done) {
    request.get('/')
      .expect(200, done);
  });
});
