'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  Trains = require('./Trains.js');


describe('Test', function() {
  
  var trains;

  beforeEach(function() {
    trains = new Trains();
  });

  it('needs to successfully set a meeting', function() {
    console.log(trains.routeLength());
  });

  it('needs to successfully set a meeting', function() {
    // console.log(routeLength);
  });


});
