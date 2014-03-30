'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  Food = require('./Food.js'),
  food = new Food();

describe('Add Food', function() {  
  var chocolate = {
    description:'Chocolate',
    price: 2.29,
    tax: 0
  }

  var Soda = {
    description:'Pepsi',
    price: 1.69,
    tax: 0
  }

  it('should be able to add food', function() {
    expect(food.addFood(chocolate)).to.be.eql(chocolate);
    expect(food.addFood(Soda)).to.be.eql(Soda);
  });
});

describe('Get All Foods', function() {
  it('should be able to retrieve all foods', function() {
    expect(food.getFoods()).to.have.length(2);
    expect(food.getFoods()[0]).to.have.ownProperty('description');
    expect(food.getFoods()[0]).to.have.ownProperty('price');
    expect(food.getFoods()[0]).to.have.ownProperty('tax');
  })
});

describe('Tax should be zero for all foods', function() {
  it('should report 0 for all tax in food collection', function() {
    expect(food.getFoods()[0].tax).to.be.eql(0);
    expect(food.getFoods()[1].tax).to.be.eql(0);    
    expect(food.getTotalTax()).to.be.eql(0);
  });
});
