var template = require('../../templates/ItemCollectionView.hbs');

module.exports = Backbone.View.extend({
	className: 'itemCollections',

	initialize: function() {
		this.collection.on('reset', this.render(), this);
	},

	render: function() {
		this.collection.each(function(model){
			console.log(model);
		});
		var itemCollectionsView = template('');
		this.$el.html(itemCollectionsView);
		$('#results').html(this.$el.html());
		return this;  
	}

});
