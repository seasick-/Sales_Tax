'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  Domestic = require('./Domestic.js'),
  domestic = new Domestic(),
  Round5Cents = require('./Round5Cents.js'),
  round5Cents = new Round5Cents();


describe('Add Domestics', function() {  
  var CD = new function() {
    this.description = 'Compact Disc';
    this.price = 20.99;
    this.tax = round5Cents.Round5Cents(this.price*.10);
    this.type = 'DomesticGeneral';
    return CD;
  }

  var Book = new function() {
    this.description = 'Book';
    this.price = 9.99;
    this.tax = this.price*0;
    this.type = 'DomesticRegular';
    return Book;
  }

  it('should be able to add Domestic goods', function() {
    expect(domestic.addDomestic(CD)).to.be.eql(CD);
    expect(domestic.addDomestic(Book)).to.be.eql(Book);
  });
});

describe('Get All Domestic Goods', function() {
  it('should be able to retrieve all Domestic goods', function() {
    expect(domestic.getDomestics()).to.have.length(2);
    expect(domestic.getDomestics()[0]).to.have.ownProperty('description');
    expect(domestic.getDomestics()[0]).to.have.ownProperty('price');
    expect(domestic.getDomestics()[0]).to.have.ownProperty('type');
    expect(domestic.getDomestics()[0]).to.have.ownProperty('tax');
  })
});

describe('Tax should be 15% of cost if not book, food or medical', function() {

  var Jewelry = new function() {
    this.description = 'Jewelry';
    this.price = 500.99;
    this.tax = round5Cents.Round5Cents(this.price*.15);
    this.type = 'DomesticGeneral'
    return Jewelry;
  }

  var Book = new function() {
    this.description = 'book';
    this.price = 14.99;
    this.tax = this.price*0;
    this.type = 'DomesticRegular'
    return Book;
  }

  it('should report 10% tax for general goods', function() {
    expect(domestic.getDomestics()[0].tax).to.be.eql(2.1);
    expect(domestic.getTotalTax()).to.be.eql(2.1);
    expect(domestic.addDomestic(Jewelry).tax).to.be.eql(50.1);    
  });

  it('should report 5% tax on books, food and medical items', function() {
    expect(domestic.getDomestics()[1].tax).to.be.eql(0);    
    expect(domestic.addDomestic(Book).tax).to.be.eql(14.99*0)
    expect(domestic.getTotalTax()).to.be.eql( 52.2);
  })

});
