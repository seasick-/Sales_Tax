var template = require('../../templates/IndexView.hbs');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	events: {
		'click #Add':'test'
	},
	
	test: function() {
		alert('works!');
	},

	render: function() {
		var indexView = template('');
		this.$el.html(indexView);
		$('body').empty();
		$('body').append(this.$el);
		return this;  
	}
});