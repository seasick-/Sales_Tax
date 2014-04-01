'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  Imports = require('./Imports.js'),
  Domestics = require('./Domestic.js'),
  CalcResults = require('./CalcResults.js'),
  Round5Cents = require('./Round5Cents.js');
  // imports = new Imports(),
  // domestics = new Domestics(),
  // calcResults = new CalcResults();

describe('Add Domestics, calculate totals', function() {  

  var imports = new Imports(),
      domestics = new Domestics(),
      calcResults = new CalcResults(),
      round5Cents = new Round5Cents();

  var Book = new function() {
    this.description = 'Book';
    this.price = 12.49;
    this.tax = this.price*.0;
    this.type = 'DomesticRegular';
    return Book;
  }

  var CD = new function() {
    this.description = 'Compact Disc';
    this.price = 14.99;
    this.tax = round5Cents.Round5Cents(this.price*.10);
    this.type = 'DomesticGeneral';
    return CD;
  }

  var Chocolate = new function() {
    this.description = 'Chocolate Bar';
    this.price = .85;
    this.tax = this.price*0;
    this.type = 'DomesticRegular';
    return Chocolate;
  }

  it('should be able to add Domestics', function() {
    expect(domestics.addDomestic(Book)).to.be.eql(Book);
    expect(domestics.addDomestic(CD)).to.be.eql(CD);
    expect(domestics.addDomestic(Chocolate)).to.be.eql(Chocolate);
  });

  it ('should be able to take both collections and return total tax', function() {
    var out = calcResults.calculateTotalTax(domestics, imports);
    expect(out).to.be.eql(1.5);
  });

  it ('should be able to take both collections and return total price', function() {
    var out = calcResults.calculateTotalPrice(domestics, imports);
    expect(out).to.be.eql(28.330000000000002);
  });

  it ('should be able to take both collections and return an object of totals', function() {
    expect(calcResults.returnTotalsObject(domestics,imports)['subtotal']).to.be.eql(28.330000000000002);
    expect(calcResults.returnTotalsObject(domestics,imports)['tax']).to.be.eql(1.5);
    expect(calcResults.returnTotalsObject(domestics,imports)['total']).to.be.eql(29.830000000000002);
  });

});

describe('Add imports, calculate totals', function() {  

  var imports = new Imports(),
      domestics = new Domestics(),
      calcResults = new CalcResults(),
      round5Cents = new Round5Cents(); 

  var Chocolate = new function() {
    this.description = 'Chocolate';
    this.price = 10.00;
    this.tax = round5Cents.Round5Cents(this.price*.05);
    this.type = 'ImportsRegular';
    return Chocolate;
  }

  var Perfume = new function() {
    this.description = 'Perfume';
    this.price = 47.50;
    this.tax = round5Cents.Round5Cents(this.price*.15);
    this.type = 'ImportsGeneral';
    return Perfume;
  }

  it('should be able to add Domestics', function() {
    expect(imports.addImports(Chocolate)).to.be.eql(Chocolate);
    expect(imports.addImports(Perfume)).to.be.eql(Perfume);
  });

  it ('should be able to take both collections and return total tax', function() {
    var out = calcResults.calculateTotalTax(domestics, imports);
    expect(out).to.be.eql(7.65);
  });

  it ('should be able to take both collections and return total price', function() {
    var out = calcResults.calculateTotalPrice(domestics, imports);
    expect(out).to.be.eql(57.5);
  });

  it ('should be able to take both collections and return an object of totals', function() {
    expect(calcResults.returnTotalsObject(domestics,imports)['subtotal']).to.be.eql(57.5);
    expect(calcResults.returnTotalsObject(domestics,imports)['tax']).to.be.eql(7.65);
    expect(calcResults.returnTotalsObject(domestics,imports)['total']).to.be.eql(65.15);
  });

});

describe('Add domestics & imports, calculate totals', function() {  

  var imports = new Imports(),
      domestics = new Domestics(),
      calcResults = new CalcResults(),    
      round5Cents = new Round5Cents();      

  var Perfume = new function() {
    this.description = 'Perfume';
    this.price = 27.99;
    this.tax = round5Cents.Round5Cents(this.price*.15);
    this.type = 'ImportsGeneral';
    return Perfume;
  }

  var PerfumeDomestic = new function() {
    this.description = 'Perfume domestic';
    this.price = 18.99;
    this.tax = round5Cents.Round5Cents(this.price*.10);
    this.type = 'DomesticGeneral';
    return PerfumeDomestic;
  }

  var Tylenol = new function() {
    this.description = 'Tylenol';
    this.price = 9.75;
    this.tax = this.price*0;
    this.type = 'DomesticRegular';
    return Tylenol;
  }

  var ImportedChocolate = new function() {
    this.description = 'ImportedChocolate';
    this.price = 11.25;
    this.tax = round5Cents.Round5Cents(this.price*.05);
    this.type = 'ImportsRegular';
    return ImportedChocolate;
  }


  it('should be able to add Domestics', function() {
    expect(imports.addImports(Perfume)).to.be.eql(Perfume);
    expect(domestics.addDomestic(PerfumeDomestic)).to.be.eql(PerfumeDomestic);
    expect(domestics.addDomestic(Tylenol)).to.be.eql(Tylenol);
    expect(imports.addImports(ImportedChocolate)).to.be.eql(ImportedChocolate);
  });

  it ('should be able to take both collections and return total tax', function() {
    var out = calcResults.calculateTotalTax(domestics, imports);
    expect(out).to.be.eql(6.65);
  });

  it ('should be able to take both collections and return total price', function() {
    var out = calcResults.calculateTotalPrice(domestics, imports);
    expect(out).to.be.eql(67.97999999999999);
  });

  it ('should be able to take both collections and return an object of totals', function() {
    expect(calcResults.returnTotalsObject(domestics,imports)['subtotal']).to.be.eql(67.97999999999999);
    expect(calcResults.returnTotalsObject(domestics,imports)['tax']).to.be.eql(6.65);
    expect(calcResults.returnTotalsObject(domestics,imports)['total']).to.be.eql(74.63);
  });

});


