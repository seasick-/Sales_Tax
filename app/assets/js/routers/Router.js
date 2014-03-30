var ItemView = require('../views/ItemView.js');
var Imports = require('../../../../test/Imports.js');

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
		this.secondFunction();
	},

	secondFunction: function() {
		var itemView = new ItemView();
		$('body').append(itemView.el);		

		$('div').find('#item').each(function(index,form){
			console.log($(this).serializeJSON());
			// $(this).serializeJSON();
		});

		var imports = new Imports();

		var temp = imports.addImports({
			description: "Compact disc",
			price : 20.99,
			type: 'ImportsGeneral'
		});
		console.log(temp);

		var temp = imports.addImports({
			description: "book",
			price : 20.99,
			type: 'ImportsRegular'
		});
		console.log(temp, imports.getImports());


	}


})