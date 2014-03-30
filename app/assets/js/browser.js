'use strict';
var $        = require('jquery');
var Trains = require('../../../test/Trains.js');

$(function() {

	var trains = new Trains();
	var graph = trains.returnGraph();

	var aNode = graph.getNode('A')
	console.log(graph);
	var aPropNames;
	aPropNames = Object.getOwnPropertyNames(aNode._outEdges);

	function getOutEdges(Node) {
		var Node = graph.getNode(Node);
		var NodePropNames;
		NodePropNames = Object.getOwnPropertyNames(Node._outEdges);
		return NodePropNames;
	}

	function makeArray(array_in){
		var result=[];
		for (var each in array_in){
			result.push(array_in[each]);
		}
		return result;
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
						result[each]+= getOutEdges(getOutEdges(aEdges[each][each1])[each2])[i];
					}					
				}
				console.log('  ',getOutEdges(getOutEdges(aEdges[each][each1])[each2]));
			}
		}
	}

for (var i=0; i<result.length; i++){
	result[i]= 'A'+result[i];
}
console.log(result);

for (var each in result){
	var out = trains.routeLength(result[each])
	console.log(out);
}

});









































