'use strict';
var $        = require('jquery');
var Trains = require('../../../test/Trains.js');

$(function() {

	var trains = new Trains();
	var out = trains.routeLength('AED');
	console.log(out);

});




	// for (var i=0; i< term.length-1; i++) {
	// 	temp += out.getEdge(term[i], term[i+1]).weight;
	// }
