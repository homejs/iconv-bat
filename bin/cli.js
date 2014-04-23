#! /usr/bin/env node

/**
 * Created by fritx on 4/23/14.
 */

var IconvBat = require('..');

var fromEncoding = process.argv[2];
var toEncoding = process.argv[3];
var directory = process.argv[4];
var outDirectory = process.argv[5] || null;

var iconvBat = new IconvBat(fromEncoding, toEncoding);

iconvBat.convertDirectory(directory, outDirectory, function (err) {
  if (err) {
    throw err;
  }
});
