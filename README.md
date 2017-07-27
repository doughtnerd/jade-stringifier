[![Build Status](https://travis-ci.org/doughtnerd/jade-stringifier.svg?branch=master)](https://travis-ci.org/doughtnerd/jade-stringifier)
[![Coverage Status](https://coveralls.io/repos/github/doughtnerd/jade-stringifier/badge.svg?branch=master)](https://coveralls.io/github/doughtnerd/jade-stringifier?branch=master)


Jade Stringifier
=========

A small library that converts a Jade template into an HTML string using ES6 promises.

## Installation

  `npm install @doughtnerd/jade-stringifier`

## Usage

    var stringifier = require('@doughtnerd/jade-stringifier');
    
    stringifier.stringify('absolute/path/to/template', {exampleContext: ['a', 'b', 'c']}).then((html) =>{
        // Do whatever with the html string that was compiled from the template.
    }).catch((err) => {
        // Do whatever with the error.
    });
  
## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. Lint and test your code.
