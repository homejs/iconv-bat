#! /usr/bin/env node

/**
 * Created by fritx on 4/23/14.
 */

var IconvBat = require('..');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2), {
  string: ['from', 'to'],
  boolean: ['recursive'],
  alias: {
    from: ['f'],
    to: ['t'],
    recursive: ['r']
  }
});

var fromEncoding = argv.from;
var toEncoding = argv.to;
var recursive = argv.recursive || false;
var file = argv._[0] || process.cwd();
var outFile = argv._[1];

var iconvBat = new IconvBat(fromEncoding, toEncoding);
var method = recursive ? 'convert' : 'convertFile';

iconvBat[method](file, outFile, function (err) {
  if (err) {
    throw err;
  }
});
