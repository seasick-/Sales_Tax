var template = require('../../templates/ItemView.hbs');
var BootStrap = require('bootstrap');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		var ItemView = template('');
		this.$el.html(ItemView);
		return this;  
	}
});