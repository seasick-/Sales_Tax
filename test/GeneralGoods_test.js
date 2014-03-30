'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  GeneralGoods = require('./GeneralGoods.js'),
  generalGoods = new GeneralGoods();

describe('Add GeneralGoods', function() {  
  var CD = new function() {
    this.description = 'Compact disc';
    this.price = 20.99;
    this.tax = this.price*.10;
    return CD;
  }

  var Perfume = new function() {
    this.description = 'Perfume';
    this.price = 50.99;
    this.tax = this.price*.10;
    return Perfume;
  }

  it('should be able to add GeneralGoods', function() {
    expect(generalGoods.addGeneralGoods(CD)).to.be.eql(CD);
    expect(generalGoods.addGeneralGoods(Perfume)).to.be.eql(Perfume);
  });
});

describe('Get All GeneralGoods', function() {
  it('should be able to retrieve all GeneralGoods', function() {
    expect(generalGoods.getGeneralGoods()).to.have.length(2);
    expect(generalGoods.getGeneralGoods()[0]).to.have.ownProperty('description');
    expect(generalGoods.getGeneralGoods()[0]).to.have.ownProperty('price');
    expect(generalGoods.getGeneralGoods()[0]).to.have.ownProperty('tax');
  })
});

describe('Tax should be 10% of cost', function() {
  it('should report 10% tax for general goods', function() {
    expect(generalGoods.getGeneralGoods()[0].tax).to.be.eql(2.0989999999999998);
    expect(generalGoods.getGeneralGoods()[1].tax).to.be.eql(5.099);    
    expect(generalGoods.getTotalTax()).to.be.eql(7.198);
  });
});
