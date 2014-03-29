var Graph = require('data-structures').Graph;
var graph = new Graph();

module.exports = function (){

  var initialize  = function makeGraph() {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addEdge('A', 'B');
    graph.getEdge('A', 'B').weight=5;
    graph.addEdge('B', 'C');
    graph.getEdge('B', 'C').weight=4;
    graph.addEdge('C', 'D');
    graph.getEdge('C', 'D').weight=8;
    graph.addEdge('D', 'C');
    graph.getEdge('D', 'C').weight=8;
    graph.addEdge('D', 'E');
    graph.getEdge('D', 'E').weight=6;
    graph.addEdge('A', 'D');
    graph.getEdge('A', 'D').weight=5;
    graph.addEdge('C', 'E');
    graph.getEdge('C', 'E').weight=2;
    graph.addEdge('E', 'B');
    graph.getEdge('E', 'B').weight=3;
    graph.addEdge('A', 'E');
    graph.getEdge('A', 'E').weight=7;
    return graph;
  }

  function computeLength(route) {
    var graph = initialize();
    var value=0;
    for (var i=0; i< route.length-1; i++) {
        try {
          value += graph.getEdge(route[i], route[i+1]).weight;
        }
        catch (e){return 'NO SUCH ROUTE'};
      }
      return value;
  }
  

  return {
    routeLength: function(route) {
      return computeLength(route);
    },
  }


}