#! /usr/bin/env node

/**
 * Created by fritx on 4/23/14.
 */

var IconvBat = require('..');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2));

var fromEncoding = argv.f;
var toEncoding = argv.t;
var directory = argv._[0];
var outDirectory = argv._[1];

var iconvBat = new IconvBat(fromEncoding, toEncoding);

iconvBat.convertDirectory(directory, outDirectory, function (err) {
  if (err) {
    throw err;
  }
});
