'use strict';

var Backbone = require('backbone');
var UserView = require('./UserView');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'grid col_12',

  initialize: function() {
    this.collection.on('add', this.addUser, this);
    this.collection.on('reset', this.addAll, this);
  },

  addUser: function(user) {
    var userView = new UserView({model: user});
    this.$el.append(userView.el);
  },

  addAll: function() {
    this.collection.forEach(this.addUser);
  },

  render: function() {
    this.addAll();
  }
});
