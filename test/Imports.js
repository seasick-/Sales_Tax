var _ = require('underscore'),
  Round5Cents = require('./Round5Cents.js'),
  round5Cents = new Round5Cents();

module.exports = function (){
  'use strict';

    var imports=[];
  
  function addImports(Imports) {
    var InputCopy;
    var tax = function findTax(type, price){
      if (type === 'ImportsRegular'){
        return round5Cents.Round5Cents(price*.05)
      }
      else return round5Cents.Round5Cents(price*.15)
    }
    imports.push(new function() {
      this.description = Imports.description;
      this.price = Imports.price;
      this.type = Imports.type;
      this.tax = tax(this.type, this.price);
      InputCopy = this;
    });
    // console.log('imports',imports);
      return InputCopy;
  }
  
  function getImports() {return imports;}

	function getTotalTax() {
	  var total=0;
	  for (var each in imports){
	    total+=imports[each].tax;
	  }
	  return total;
	}

  return {
    addImports: function(Imports){
      return addImports(Imports);
    },
    getImports: function() {
    	return getImports();
    },
    getTotalTax: function() {
    	return getTotalTax();
    }
  };

};
