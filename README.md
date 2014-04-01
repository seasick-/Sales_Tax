Sales_Tax
=========

Coding challenge

[![Build Status](https://travis-ci.org/seasick-/Sales_Tax.svg?branch=master)](https://travis-ci.org/seasick-/Sales_Tax)
[![Coverage Status](http://coveralls.io/repos/seasick-/Sales_Tax/badge.png?branch=master)](http://coveralls.io/r/seasick-/Sales_Tax?branch=master)

## Installation
From project directory...  
1. `npm install`  
2. `bower install`  
3. `grunt test`  

### Acceptance Tests
Acceptance tests need:

1. phantomjs and casperjs installed globally:
`npm install -g phantomjs casperjs` is the preferred method for installation.

## Grunt Tasks
`default`: test, watch:express

`build:dev`: clean:dev, browserify:dev, copy:dev

`test`: mochacov:unit, mochacov:coverage, test:acceptance

`travis`: mochacov:unit, mochacov:coverage, test:acceptance, mochacov:coveralls

`server`: build:dev, express:dev, watch:express (Use this task to run application @ localhost:3000)

`test:acceptance`: build:dev, express:dev, casper

`mochacov:html`: mac usage: `grunt mochacov:html > doc/coverage.html && open -a Google\ Chrome doc/coverage.html`
