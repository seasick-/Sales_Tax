var _ = require('underscore'),
      Round5Cents = require('./Round5Cents.js'),
      round5Cents = new Round5Cents();

module.exports = function (){
  'use strict';

  var domestics=[];
  
  function addDomestic(Domestics) {
    var InputCopy;
    var tax = function findTax(type, price){
      if (type === 'DomesticRegular'){
        return price*0
      }
      else return round5Cents.Round5Cents(price*.10)
    }
    domestics.push(new function() {
      this.description = Domestics.description;
      this.price = Domestics.price;
      this.type = Domestics.type;
      this.tax = tax(this.type, this.price);
      InputCopy = this;
    });
    return InputCopy;
  }
  
  function getDomestics() {return domestics;}

  function getTotalTax() {
    var total=0;
    for (var each in domestics){
      total+=domestics[each].tax;
    }
    return total;
  }

  return {
    addDomestic: function(Domestics){
      return addDomestic(Domestics);
    },
    getDomestics: function() {
      return getDomestics();
    },
    getTotalTax: function() {
      return getTotalTax();
    }
  };

};
