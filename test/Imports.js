var _ = require('underscore')
module.exports = function (){
  'use strict';

	var imports=[];


  function addImports(Imports) {
    var tax = function findTax(item, price){
      if (_.contains(['book','food','medical'], item)){
        return price*.05
      }
      else return price*.15
    }
		imports.push(new function() {
      this.description = Imports.description;
      this.price = Imports.price;
      this.tax = tax(this.description, this.price);
    });
		return Imports;
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