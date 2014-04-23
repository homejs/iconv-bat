/**
 * Created by fritx on 4/23/14.
 */

var iconv = require('iconv-lite');
var fs = require('fs');
var path = require('path');
var async = require('async');
var mkdirp = require('mkdirp');

function IconvBat(fromEncoding, toEncoding) {
  this.fromEncoding = fromEncoding;
  this.toEncoding = toEncoding;
}

function convertFile(file, outFile, callback) {
  if (!callback) {
    callback = outFile;
    outFile = file;
  }
  var self = this;
  fs.readFile(file, function (err, buffer) {
    if (err) {
      return callback(err);
    }
    var str = iconv.decode(buffer, self.fromEncoding);
    var outBuffer = iconv.encode(str, self.toEncoding);
    mkdirp.sync(path.dirname(outFile));
    fs.writeFile(outFile, outBuffer, function (err) {
      callback(err);
    });
  });
}
IconvBat.prototype.convertFile = convertFile;

function convertDirectory(directory, outDirectory, callback) {
  if (!callback) {
    callback = outDirectory;
    outDirectory = directory;
  }
  var self = this;
  fs.readdir(directory, function (err, names) {
    async.each(names, function (name, callback) {
      var file = path.join(directory, name);
      var outFile = path.join(outDirectory, name);
      self.convertFile(file, outFile, callback);
    }, function (err) {
      callback(err);
    });
  });
}
IconvBat.prototype.convertDirectory = convertDirectory;

module.exports = IconvBat;
