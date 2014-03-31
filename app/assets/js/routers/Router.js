var Events = require('../Events.js');
var Item = require('../models/Item.js');
var ItemCollection = require('../models/ItemCollection.js');
var IndexView = require('../views/IndexView.js');
var ItemView = require('../views/ItemView.js');
var Imports = require('../../../../test/Imports.js');

module.exports = Backbone.Router.extend({
	routes: {
		'': ''
	},

	initialize: function(){
		console.log('Initialized');
		var indexView = new IndexView();
		var itemView = new ItemView();
		$('#priceItems').append(itemView.el);		
	}

})
