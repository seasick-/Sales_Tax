'use strict';
/*global casper*/

casper.test.begin('home page test', 12, function suite(test) {

  casper.start('http://localhost:3000/', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertTitle('Checkout');
  });

  casper.then(function() {
    test.assertElementCount('div',15);
  });

  casper.then(function() {
    test.assertElementCount('input',2);
  });

  casper.then(function() {
    test.assertExists('form#item');
  })

  casper.then(function() {
    test.assertExists('#firstPage');
  })

  casper.then(function() {
    test.assertExists('#firstPage');
  })

  casper.then(function() {
    test.assertExists('#Add');
  })

  casper.then(function() {
    test.assertExists('#priceItems');
  })

  casper.then(function() {
    test.assertExists('#Calculate');
  })

  casper.then(function() {
    test.assertExists('#results');
  })

  casper.then(function() {
    test.assertExists('.main');
  })

  casper.run(function(){
    test.done();
  });

});
