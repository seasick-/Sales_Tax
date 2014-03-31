var template = require('../../templates/IndexView.hbs');
var ItemView = require('./ItemView.js');

module.exports = Backbone.View.extend({	
	initialize: function() {
		// this.itemView = new ItemView();
		this.render();
	},
	events: {
		'click #Add':'AddListItem'
	},

	AddListItem: function() {
		var itemView = new ItemView()
		$('#priceItems').append(itemView.el);
	},

	render: function() {
		var indexView = template('');
		this.$el.html(indexView);
		$('body').empty();
		$('body').replaceWith(this.$el);
		return this;  
	}
});