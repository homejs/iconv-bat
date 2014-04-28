/**
 * Created by fritx on 4/23/14.
 */

var IconvBat = require('..');
var path = require('path');
var fs = require('fs');
var test = require('tap').test;

var fromEncoding = 'gbk';
var toEncoding = 'utf-8';
var file = path.join(__dirname, 'fixtures/original/plan.txt');
var expectedFile = path.join(__dirname, 'fixtures/expected/plan.txt');
var outFile = path.join(__dirname, 'converted/plan.txt');

var iconvBat = new IconvBat(fromEncoding, toEncoding);

test('should convert file correctly', function (t) {
  iconvBat.convert(file, outFile, function (err) {
    if (err) {
      throw err;
    }
    fs.readFile(outFile, function (err, outBuffer) {
      fs.readFile(expectedFile, function (err, expectedBuffer) {
        t.deepEqual(outBuffer, expectedBuffer);
        t.end();
      });
    });
  });
});
