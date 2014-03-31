'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  Imports = require('./Imports.js'),
  imports = new Imports();

describe('Add Imports', function() {  
  var CD = new function() {
    this.description = 'Compact Disc';
    this.price = 20.99;
    this.tax = this.price*.15;
    this.type = 'ImportsGeneral';
    return CD;
  }

  var Book = new function() {
    this.description = 'Book';
    this.price = 9.99;
    this.tax = this.price*.05;
    this.type = 'ImportsRegular';
    return Book;
  }

  it('should be able to add Imports', function() {
    expect(imports.addImports(CD)).to.be.eql(CD);
    expect(imports.addImports(Book)).to.be.eql(Book);
  });
});

describe('Get All Imports', function() {
  it('should be able to retrieve all Imports', function() {
    expect(imports.getImports()).to.have.length(2);
    expect(imports.getImports()[0]).to.have.ownProperty('description');
    expect(imports.getImports()[0]).to.have.ownProperty('price');
    expect(imports.getImports()[0]).to.have.ownProperty('type');
    expect(imports.getImports()[0]).to.have.ownProperty('tax');
  })
});

describe('Tax should be 15% of cost if not book, food or medical', function() {

  var Jewelry = new function() {
    this.description = 'Perfume';
    this.price = 500.99;
    this.tax = this.price*.15;
    this.type = 'ImportsGeneral'
    return Jewelry;
  }

  var Book = new function() {
    this.description = 'book';
    this.price = 14.99;
    this.tax = this.price*.05;
    this.type = 'ImportsRegular'
    return Book;
  }

  it('should report 15% tax for general goods', function() {
    expect(imports.getImports()[0].tax).to.be.eql(3.1485);
    expect(imports.getImports()[1].tax).to.be.eql(0.49950000000000006);    
    expect(imports.getTotalTax()).to.be.eql(0.49950000000000006+3.1485);
    expect(imports.addImports(Jewelry).tax).to.be.eql(500.99*.15);    
  });

  it('should report 5% tax on books, food and medical items', function() {
    expect(imports.addImports(Book).tax).to.be.eql(14.99*.05)
    expect(imports.getTotalTax()).to.be.eql(3.1485+(500.99*.15)+(14.99*.05)+0.49950000000000006);
  })

});
