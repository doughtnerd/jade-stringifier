const fs = require("fs");
const _jade = require('jade');

/**
 * Converts the given template into an HTML string using the given context.
 * @param {pathToTemplate} The path to the template that should be converted.
 * @param {context} The context that should be used when compiling the template.
 * @return {Promise}
 */
module.exports.stringify = function(pathToTemplate, context){
    let promise = new Promise(function(resolve, reject){
        fs.readFile(pathToTemplate, 'utf8', function(err, file){
            if(err){
                reject(err);
            } else {
                let compiled = _jade.compile(file, {filename: pathToTemplate});
                let html = compiled(context);
                resolve(html);
            }
        });
    });
    return promise;
};