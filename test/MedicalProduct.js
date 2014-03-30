module.exports = function (){
  'use strict';

	var foods=[];

  function addFood(Food) {
		foods.push({
			description:Food.description,
			price:Food.price,
			tax: 0
		});
		return Food;
  }
  
  function getFoods() {return foods;}

	function getTotalTax() {
		var total=0;
		for (var each in foods){
			total+=foods[each].tax;
		}
		return total;
	}

  return {
    addFood: function(Food){
      return addFood(Food);
    },
    getFoods: function() {
    	return getFoods();
    },
    getTotalTax: function() {
    	return getTotalTax();
    }
  };

};