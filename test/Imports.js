var _ = require('underscore')
module.exports = function (){
  'use strict';

	var imports=[];
  
  function addImports(Imports) {
    var InputCopy;
    var tax = function findTax(type, price){
      if (type === 'ImportsRegular'){
        return price*.05
      }
      else return price*.15
    }
		imports.push(new function() {
      this.description = Imports.description;
      this.price = Imports.price;
      this.type = Imports.type;
      this.tax = tax(this.type, this.price);
      InputCopy = this;
    });
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