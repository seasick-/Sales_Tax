// var Serialize = require('../lib/jquery.serializeJSON.js');
var template = require('../../templates/IndexView.hbs');
var ItemView = require('./ItemView.js');
var ItemCollection = require('../models/ItemCollection.js');
var Domestic = require('../../../../test/Domestic.js');
var Imports = require('../../../../test/Imports.js');
var itemCollection = new ItemCollection;
var domestic = new Domestic();
var imports = new Imports();

module.exports = Backbone.View.extend({	
	className:'main',
	initialize: function() {
		this.render();
	},
	events: {
		'click #Add':'AddListItem',
		'click #Delete':'DeleteListItem',
		'click #Calculate' : 'CalculateTotal'
	},

	AddListItem: function() {
		var itemView = new ItemView();
		$('#priceItems').append(itemView.el);
	},

	DeleteListItem: function(e) {
		$(e.currentTarget).parentsUntil('.items').remove();
	},

	CalculateTotal: function() {
		var eachItem;
		var temp;
		$('div').find('#item').each(function(index,form){
			eachItem = $(this).serializeJSON();
			console.log(eachItem);
			if (eachItem.type === 'DomesticGeneral' || 
				eachItem.type === 'DomesticRegular'){
				temp = domestic.addDomestic(eachItem);
				itemCollection.add(temp);
			}
			if (eachItem.type === 'ImportsGeneral' || 
				eachItem.type === 'ImportsRegular'){
				temp = imports.addImports(eachItem);
				itemCollection.add(temp);
			}
			console.log(itemCollection, domestic.getDomestics(), imports.getImports());
		});		
	},

	render: function() {
		var indexView = template('');
		this.$el.html(indexView);
		$('body').empty();
		$('body').replaceWith(this.$el);
		return this;  
	}
});