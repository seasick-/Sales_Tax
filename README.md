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
`default`: jshint, test, watch:express  
`build:dev`: clean:dev, sass:dev, browserify:dev, jshint:all, copy:dev  
`build:prod`: clean:prod, browserify:prod, jshint:all, copy:prod  
`test`: jshint, simplemocha:dev  
`test:acceptance`: express:dev, casper  
`server`: build:dev, express:dev, watch:express
`mochacov:html`: mac usage: `grunt mochacov:html > doc/coverage.html && open -a Google\ Chrome doc/coverage.html`

## Documentation

Check out the Markdown document in
[doc/tutorial.md](https://github.com/codefellows/oaa/blob/master/doc/tutorial.md)
