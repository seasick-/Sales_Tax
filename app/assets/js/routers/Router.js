var ItemView = require('../views/ItemView.js');

module.exports = Backbone.Router.extend({
	routes: {
		'': ''
	},
	initialize: function(){
		console.log('router has been initialized')
		this.firstFunction();
	},
	firstFunction: function() {	
		var itemView = new ItemView();
		$('body').append(itemView.el);
	}


})