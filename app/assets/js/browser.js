'use strict';
var $        = require('jquery');
var Trains = require('../../../test/Trains.js');

$(function() {

	var trains = new Trains();
	var graph = trains.returnGraph();
	console.log(graph);
	console.log(graph.getInEdgesOf('B'));

	function getOutEdges(Node) {
		var Node = graph.getNode(Node);
		var NodePropNames;
		NodePropNames = Object.getOwnPropertyNames(Node._outEdges);
		return NodePropNames;
	}

	var aEdges = getOutEdges('B');
	var result = ['B'];

	for (var each in aEdges){
		console.log('1', aEdges[each]);	
		for (var each1 in aEdges[each]){
			console.log('2', getOutEdges(aEdges[each][each1]));
			for (var each2 in getOutEdges(aEdges[each][each1])){
				result[each] += getOutEdges(getOutEdges(aEdges[each][each1])[each2]);
				console.log('3  ',getOutEdges(getOutEdges(aEdges[each][each1])[each2]));
				for (var each3 in getOutEdges(getOutEdges(aEdges[each][each1])[each2])){
					break;
				}
			}
		}
	}
	result = result[0].replace(',','');
	console.log(result);
});









































