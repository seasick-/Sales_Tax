var Events = require('../Events.js');
var template = require('../../templates/IndexView.hbs');
var ItemView = require('./ItemView.js');
var ItemCollection = require('../models/ItemCollection.js');
var ItemCollectionView = require('../views/ItemCollectionView.js');
var Domestic = require('../../../../test/Domestic.js');
var Imports = require('../../../../test/Imports.js');
var CalcResults = require('../../../../test/CalcResults.js');

module.exports = Backbone.View.extend({	
	className:'main',

	initialize: function() {
		// Events.on('resetCollection', function() {
		// 	console.log('reset');
		// 	itemCollection.reset([]);
		// });

		this.render();
	},
	events: {
		'click #Add':'AddListItem',
		'click #Delete':'DeleteListItem',
		'click #Calculate' : 'CalculateTotal_Render',
	},
	
	AddListItem: function() {
		var itemView = new ItemView();
		$('#priceItems').append(itemView.el);
	},

	DeleteListItem: function(e) {
		$(e.currentTarget).parentsUntil('.items').remove();
	},

	CalculateTotal_Render: function() {
		var eachItem;
		var temp;
		var itemCollection = new ItemCollection();
		var domestic = new Domestic();
		var imports = new Imports();
		var calcResults = new CalcResults();


		$('div').find('#item').each(function(index,form){
			eachItem = $(this).serializeJSON();
			console.log(eachItem);
			if (eachItem.type === 'DomesticGeneral' || 
				eachItem.type === 'DomesticRegular'){
				temp = domestic.addDomestic(eachItem);
				console.log('temp', temp);
				itemCollection.add(temp);
			}
			if (eachItem.type === 'ImportsGeneral' || 
				eachItem.type === 'ImportsRegular'){
				temp = imports.addImports(eachItem);
				itemCollection.add(temp);
			}
		});		
		var itemCollectionView = new ItemCollectionView({collection:itemCollection, 
			totalPrice: calcResults.calculateTotalPrice(domestic,imports),
			totalTax: calcResults.calculateTotalTax(domestic,imports),
			totals: calcResults.returnTotalsObject(domestic,imports)
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
