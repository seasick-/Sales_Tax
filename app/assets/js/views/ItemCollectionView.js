var template = require('../../templates/ItemCollectionView.hbs');

module.exports = Backbone.View.extend({
	className: 'itemCollections',

	initialize: function() {
		this.collection.on('reset', this.render(), this);
	},

	render: function() {
		this.collection.each(function(model){
			console.log('here', model);
			console.log('yalllo');
		});
		var itemCollectionsView = template('');
		this.$el.html(itemCollectionsView);
		$('.main').append(this.$el.html());
		return this;  
	}

});