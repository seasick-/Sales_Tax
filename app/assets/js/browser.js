'use strict';
var $        = require('jquery');
var Trains = require('../../../test/Trains.js');

$(function() {

	var trains = new Trains();
	var out = trains.startANDend();
	console.log(out);

	var cNode = out.getNode('C');
	var temp;
	var temp1;
	var temp2;
	var result;
	var count=0;
	console.log(cNode);
	for (var each in cNode._outEdges){	
		temp = Object.getOwnPropertyNames(cNode._outEdges)
		for (var each1 in temp){
				temp1 = out.getNode(temp[each1]);
				console.log(temp1);
				for (var each2 in temp1){
					temp2 = Object.getOwnPropertyNames(temp1._outEdges);
					console.log(temp2);
					for (var each2 in temp2){
						console.log(temp2[each2]);
						if (temp2[each2] === 'C') count++;
						result = out.getEdge(temp2[each2], 'C');
						if (result === 'C'  || result !== undefined) count++;
					}
					break;
				}
		}
		break;
	}
	console.log('count',count);

});