'use strict';
/*global casper*/

casper.test.begin('Click Add', 3, function suite(test) {

  casper.start('http://localhost:3000', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function() {
    casper.wait(200, function() {
      this.echo('Wait for container to pop up');
    });  
  });

  casper.then(function(){
    this.fill('form#item', {
      'price': '45.99',
      'description': 'Perfume'
    }, true);
  });

  casper.then(function() {
    this.mouseEvent('click', '#Calculate');
  });

  casper.then(function() {
    casper.wait(200, function() {
      this.echo('Wait for container to pop up');
    });  
  });

  casper.then(function(){
    test.assertExists('.container');
  });

  casper.run(function(){
    test.done();
  });

});
