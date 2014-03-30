module.exports = function (){
  'use strict';

	var medicalProducts=[];

  function addMedicalProduct(MedicalProduct) {
		medicalProducts.push({
			description:MedicalProduct.description,
			price:MedicalProduct.price,
			tax: 0
		});
		return MedicalProduct;
  }
  
  function getMedicalProducts() {return medicalProducts;}

	function getTotalTax() {
		var total=0;
		for (var each in medicalProducts){
			total+=medicalProducts[each].tax;
		}
		return total;
	}

  return {
    addMedicalProduct: function(MedicalProduct){
      return addMedicalProduct(MedicalProduct);
    },
    getMedicalProducts: function() {
    	return getMedicalProducts();
    },
    getTotalTax: function() {
    	return getTotalTax();
    }
  };

};