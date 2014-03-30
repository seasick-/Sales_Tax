'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  Book = require('./Book.js'),
  book = new Book();

describe('Add Books', function() {  
  var grapesOfWrath = {
    name:'GrapesOfWrath',
    price: 10.59,
    tax: 0
  }

  var greatGatsby = {
    name:'GreatGatsby',
    price: 8.49,
    tax: 0
  }

  it('should be able to add books', function() {
    expect(book.addBook(grapesOfWrath)).to.be.eql(grapesOfWrath);
    expect(book.addBook(greatGatsby)).to.be.eql(greatGatsby);
  });
});

describe('Get All Books', function() {
  it('should be able to retrieve all books', function() {
    expect(book.getBooks()).to.have.length(2);
    expect(book.getBooks()[0]).to.have.ownProperty('name');
    expect(book.getBooks()[0]).to.have.ownProperty('price');
    expect(book.getBooks()[0]).to.have.ownProperty('tax');
  })
});

describe('Tax should be zero for all books', function() {
  it('should report 0 for all tax in book collection', function() {
    expect(book.getBooks()[0].tax).to.be.eql(0);
    expect(book.getBooks()[1].tax).to.be.eql(0);    
    expect(book.getTotalTax()).to.be.eql(0);
  });
});
