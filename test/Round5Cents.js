module.exports = function (){
  'use strict';

  function Round5Cents(value){
    var temp = value*20;
    temp = Math.round(temp);
    return temp/20;
  }

  return {
    Round5Cents: function(value){
      return Round5Cents(value);
    }
  };

};