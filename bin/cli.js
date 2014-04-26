#! /usr/bin/env node

/**
 * Created by fritx on 4/23/14.
 */

var IconvBat = require('..');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2), {
  string: ['from', 'to'],
  alias: {
    from: ['f'],
    to: ['t']
  }
});

var fromEncoding = argv.from;
var toEncoding = argv.to;
var directory = argv._[0] || process.cwd();
var outDirectory = argv._[1];

var iconvBat = new IconvBat(fromEncoding, toEncoding);

iconvBat.convertDirectory(directory, outDirectory, function (err) {
  if (err) {
    throw err;
  }
});
