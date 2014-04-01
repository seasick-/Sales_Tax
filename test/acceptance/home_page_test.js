'use strict';
/*global casper*/

casper.test.begin('home page', 3, function suite(test) {

  casper.start('http://localhost:3000/', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertTitle('Checkout');
  });

  casper.then(function() {
    test.assertElementCount('div',15);
  });

  casper.run(function(){
    test.done();
  });

});
