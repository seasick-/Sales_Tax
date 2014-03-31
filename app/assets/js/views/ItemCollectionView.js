var template1 = require('../../templates/ItemCollectionView1.hbs');
var template2 = require('../../templates/ItemCollectionView2.hbs');

module.exports = Backbone.View.extend({
	className: 'itemCollections',

	initialize: function(options) {
		this.options = options;
		this.collection.on('reset', this.render(), this);
	},

	render: function() {
		console.log(this.options.totalPrice, this.options.totalTax, this.options.totals);
		console.log(this.collection.toJSON());
		var itemCollectionsView1 = template1(this.collection.toJSON());
		this.$el.html(itemCollectionsView1);
		$('#results').html(this.$el.html());
		return this;  
	}

});
