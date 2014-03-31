var template = require('../../templates/ItemView.hbs');

module.exports = Backbone.View.extend({
	// tagName:'div',
	// className: 'items',

	initialize: function() {
		console.log('another');
		this.render();
	},
	render: function() {
		var ItemView = template('');
		this.$el.html(ItemView);
		return this;  
	}
});