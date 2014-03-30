module.exports = function (){
  'use strict';

	var generalGoods=[];

  function addGeneralGoods(GeneralGoods) {
		generalGoods.push(new function() {
      this.description = GeneralGoods.description;
      this.price = GeneralGoods.price;
      this.tax = this.price * .10;
    });
		return GeneralGoods;
  }
  
  function getGeneralGoods() {return generalGoods;}

	function getTotalTax() {
		var total=0;
		for (var each in generalGoods){
			total+=generalGoods[each].tax;
		}
		return total;
	}

  return {
    addGeneralGoods: function(generalGoods){
      return addGeneralGoods(generalGoods);
    },
    getGeneralGoods: function() {
    	return getGeneralGoods();
    },
    getTotalTax: function() {
    	return getTotalTax();
    }
  };

};