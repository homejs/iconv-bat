/**
 * Created by fritx on 4/23/14.
 */

var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var test = require('tap').test;

var fromEncoding = 'gbk';
var toEncoding = 'utf-8';
var directory = path.join(__dirname, 'fixtures/original');
var expectedFile = path.join(__dirname, 'fixtures/expected/plan.txt');
var outDirectory = path.join(__dirname, 'converted/directory');
var outFile = path.join(outDirectory, 'plan.txt');

test('should convert directory correctly', function (t) {
  exec('npm link', function (err) {
    if (err) {
      throw err;
    }
    exec([
      'iconv-bat', '-f', fromEncoding, '-t', toEncoding,
      '-r', directory, outDirectory
    ].join(' '), function (err) {
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
});
