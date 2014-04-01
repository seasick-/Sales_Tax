var template1 = require('../../templates/ItemCollectionView1.hbs');
var template2 = require('../../templates/ItemCollectionView2.hbs');

module.exports = Backbone.View.extend({
	className: 'itemCollections',

	initialize: function(options) {
		this.options = options;
		this.collection.on('reset', this.render(), this);
	},

	render: function() {

		var itemCollectionsView1 = template1(this.collection.toJSON());
		var itemCollectionsView2 = template2({
			total:this.options.totals.total,
			tax:this.options.totals.tax
		});

		this.$el.html(itemCollectionsView1);
		this.$('#CollectionView2').replaceWith(itemCollectionsView2);

		$('#results').html(this.$el.html());
		return this;  
	}

});
