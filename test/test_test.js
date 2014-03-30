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

  it('needs to report the correct route distance', function() {
    expect(trains.routeLength('ABC')).to.be.eql(9);
    expect(trains.routeLength('AD')).to.be.eql(5);
    expect(trains.routeLength('ADC')).to.be.eql(13);
    expect(trains.routeLength('AEBCD')).to.be.eql(22);
    expect(trains.routeLength('AED')).to.be.eql('NO SUCH ROUTE');
    expect(trains.routeLength('ACD')).to.be.eql('NO SUCH ROUTE');
  });

  it('should report the correct number of trips for C-C, with 3 stops max', function() {
    expect(trains.findThreeStops('C','C')).to.be.eql(2);
  });


});