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
