'use strict';
var $        = require('jquery');
var Trains = require('../../../test/Trains.js');

$(function() {

	var trains = new Trains();
	var out = trains.startANDend();
	console.log(out);

});