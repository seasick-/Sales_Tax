'use strict';

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  MedicalProduct = require('./MedicalProduct.js'),
  medicalProduct = new MedicalProduct();

describe('Add Food', function() {  
  var tylenol = {
    description:'Aspirin',
    price: 5.49,
    tax: 0
  }

  var Bandages = {
    description:'Band-Aid',
    price: 3.29,
    tax: 0
  }

  it('should be able to add MedicalProduct', function() {
    expect(medicalProduct.addMedicalProduct(tylenol)).to.be.eql(tylenol);
    expect(medicalProduct.addMedicalProduct(Bandages)).to.be.eql(Bandages);
  });
});

describe('Get All MedicalProducts', function() {
  it('should be able to retrieve all MedicalProducts', function() {
    expect(medicalProduct.getMedicalProducts()).to.have.length(2);
    expect(medicalProduct.getMedicalProducts()[0]).to.have.ownProperty('description');
    expect(medicalProduct.getMedicalProducts()[0]).to.have.ownProperty('price');
    expect(medicalProduct.getMedicalProducts()[0]).to.have.ownProperty('tax');
  })
});

describe('Tax should be zero for all MedicalProducts', function() {
  it('should report 0 for all tax in MedicalProducts collection', function() {
    expect(medicalProduct.getMedicalProducts()[0].tax).to.be.eql(0);
    expect(medicalProduct.getMedicalProducts()[1].tax).to.be.eql(0);    
    expect(medicalProduct.getTotalTax()).to.be.eql(0);
  });
});
