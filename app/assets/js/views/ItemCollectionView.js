var template = require('../../templates/ItemView.hbs');

module.exports = Backbone.View.extend({
	tagName:'div',
	className: 'itemCollections',

	initialize: function() {
		this.render();
	},

	render: function() {
		var ItemView = template('');
		this.$el.html(ItemView);
		return this;  
	}

});