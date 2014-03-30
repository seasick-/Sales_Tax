var Graph = require('data-structures').Graph;
var graph = new Graph();

module.exports = function (){

  function makeGraph() {
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
    var graph = makeGraph();
    var value=0;
    for (var i=0; i< route.length-1; i++) {
        try {
          value += graph.getEdge(route[i], route[i+1]).weight;
        }
        catch (e){return 'NO SUCH ROUTE'};
      }
      return value;
  }
  
  function maxThreeStops(first,last) {
    var out = makeGraph();
    var firstN = out.getNode(first);
    var temp;
    var temp1;
    var temp2;
    var result;
    var count=0;
    for (var each in firstN._outEdges){  
      temp = Object.getOwnPropertyNames(firstN._outEdges)
      for (var each1 in temp){
          temp1 = out.getNode(temp[each1]);
          for (var each2 in temp1){
            temp2 = Object.getOwnPropertyNames(temp1._outEdges);
            for (var each2 in temp2){
              if (temp2[each2] === last) count++;
              result = out.getEdge(temp2[each2], last);
              if (result === last  || result !== undefined) count++;
            }
            break;
          }
      }
      break;
    }    
    return count;
  }

  function shortestA_to_C () {

    function getOutEdges(Node) {
      var Node = graph.getNode(Node);
      var NodePropNames;
      NodePropNames = Object.getOwnPropertyNames(Node._outEdges);
      return NodePropNames;
    }
    
    var graph = makeGraph();
    var aEdges = getOutEdges('A');
    var result = aEdges;

    for (var each in aEdges){
      for (var each1 in aEdges[each]){
        for (var i=0; i<getOutEdges(aEdges[each][each1]).length; i++){
          if (getOutEdges(aEdges[each][each1])[i] === 'C'){
            result[each] += getOutEdges(aEdges[each][each1])[i];
          }       
        }
        for (var each2 in getOutEdges(aEdges[each][each1])){
          for (var i=0; i<getOutEdges(getOutEdges(aEdges[each][each1])[each2]).length; i++){
            if (getOutEdges(getOutEdges(aEdges[each][each1])[each2])[i]==='C'){
              result[each]+= getOutEdges(aEdges[each][each1])[i]  ;
            }         
          }
        }
      }
    }

    for (var i=0; i<result.length; i++){
      result[i]= 'A'+result[i];
    }

    var out=[];
    for (var each in result){
      out.push(computeLength(result[each]));
    }
    return (Math.min.apply(Math,out));
  }


  return {
    returnGraph: function(){return makeGraph()},
    routeLength: function(route) {return computeLength(route)},
    maxThreeStops: function(first,last) {return maxThreeStops(first,last)},
    shortestA_to_C: function() {return shortestA_to_C() }
  }


}