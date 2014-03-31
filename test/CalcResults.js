var Imports = require('./Imports.js'),
    imports = new Imports(),
    Domestics = require('./Domestic.js'),
    domestics = new Domestics();

module.exports = function (){
  'use strict';

  function calculateTotalPrice(domestics,imports){
    var temp1=0;
    var temp2=0;
    for (var each in domestics.getDomestics()){
        temp1+=domestics.getDomestics()[each].price;
    }
    for (var each in imports.getImports()){
        temp2+=imports.getImports()[each].price;
    }
    return temp1+temp2;
  }

  function calculateTotalTax(domestics, imports){
    if (domestics === null || domestics === undefined ||
      imports === null || imports ===undefined){
      return 'error'
    }
    else {
      return domestics.getTotalTax() + imports.getTotalTax();
    }
  }
  
  function returnTotalsObject(domestics,imports){
    var Totals = new function() {
      this.subtotal = calculateTotalPrice(domestics,imports),
      this.tax = calculateTotalTax(domestics,imports),
      this.total = this.subtotal+this.tax;
      return Totals
    }
    return Totals;
  }

  return {
    calculateTotalTax: function(domestics, imports){
      return calculateTotalTax(domestics,imports);
    },
    calculateTotalPrice: function(domestics,imports) {
    	return calculateTotalPrice(domestics,imports);
    },
    returnTotalsObject: function(domestics,imports) {
    	return returnTotalsObject(domestics,imports);
    }
  };

};