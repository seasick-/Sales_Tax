var template = require('../../templates/ItemCollectionView.hbs');

module.exports = Backbone.View.extend({
	className: 'itemCollections',

	initialize: function() {
		this.collection.on('reset', this.render(), this);
	},

	render: function() {
		console.log(this.collection);
		console.log(this.collection.toJSON());
		var itemCollectionsView = template(this.collection.toJSON());
		this.$el.html(itemCollectionsView);
		$('#results').html(this.$el.html());
		return this;  
	}

});
