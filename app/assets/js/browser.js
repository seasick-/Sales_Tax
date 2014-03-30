'use strict';
var $        = require('jquery');
var Trains = require('../../../test/Trains.js');

$(function() {

	var trains = new Trains();
	var graph = trains.returnGraph();

	function getOutEdges(Node) {
		var Node = graph.getNode(Node);
		var NodePropNames;
		NodePropNames = Object.getOwnPropertyNames(Node._outEdges);
		return NodePropNames;
	}

	var aEdges = getOutEdges('A');
	var result = aEdges;

	for (var each in aEdges){
		console.log('1', aEdges[each]);	
		for (var each1 in aEdges[each]){
			for (var i=0; i<getOutEdges(aEdges[each][each1]).length; i++){
				if (getOutEdges(aEdges[each][each1])[i] === 'C'){
					result[each] += getOutEdges(aEdges[each][each1])[i];
				}				
			}
			console.log('2', getOutEdges(aEdges[each][each1]));
			for (var each2 in getOutEdges(aEdges[each][each1])){
				for (var i=0; i<getOutEdges(getOutEdges(aEdges[each][each1])[each2]).length; i++){
					if (getOutEdges(getOutEdges(aEdges[each][each1])[each2])[i]==='C'){
						result[each]+= getOutEdges(aEdges[each][each1])[i]  ;
					}					
				}
				console.log('  ',getOutEdges(getOutEdges(aEdges[each][each1])[each2]));
			}
		}
	}

	console.log(result);
	for (var i=0; i<result.length; i++){
		result[i]= 'A'+result[i];
	}
	console.log(result);

	var out=[];
	for (var each in result){
		out.push(trains.routeLength(result[each]));
	}
	console.log(Math.min.apply(Math,out));

});









































