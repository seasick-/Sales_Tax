var template = require('../../templates/IndexView.hbs');
var ItemView = require('./ItemView.js');

module.exports = Backbone.View.extend({	
	className:'main',
	initialize: function() {
		this.render();
	},
	events: {
		'click #Add':'AddListItem',
		'click #Delete':'DeleteListItem'
	},

	AddListItem: function() {
		var itemView = new ItemView();
		$('#priceItems').append(itemView.el);
	},

	DeleteListItem: function(e) {
		$(e.currentTarget).parentsUntil('.items').remove();
	},

	render: function() {
		var indexView = template('');
		this.$el.html(indexView);
		$('body').empty();
		$('body').replaceWith(this.$el);
		return this;  
	}
});