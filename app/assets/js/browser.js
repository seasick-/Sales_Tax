'use strict';
/*jshint unused:false */

// load jquery et all via browserify
var $        = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');
Backbone.$   = $;
var Graph = require('data-structures').Graph;

var ApplicationRouter = require('./routers/ApplicationRouter');

$(function() {
  var appRouter = new ApplicationRouter;
  appRouter.start();

var graph = new Graph;
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'C');
console.log('graph', graph);

var out = graph.getAllEdgesOf('A');
console.log(out);

});
