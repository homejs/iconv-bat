/**
 * Created by fritx on 4/23/14.
 */

var iconv = require('iconv-lite');
var fs = require('fs');
var path = require('path');
var async = require('async');
var mkdirp = require('mkdirp');

function IconvBat(fromEncoding, toEncoding) {
  this.fromEncoding = fromEncoding || 'gbk';
  this.toEncoding = toEncoding || 'utf-8';
}

function convertFile(file, outFile, callback) {
  if (arguments.length < 3) {
    callback = outFile;
    outFile = null;
  }
  if (!outFile) {
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
  if (arguments.length < 3) {
    callback = outDirectory;
    outDirectory = null;
  }
  if (!outDirectory) {
    outDirectory = directory;
  }
  var self = this;
  fs.readdir(directory, function (err, names) {
    async.each(names, function (name, next) {
      var file = path.join(directory, name);
      var outFile = path.join(outDirectory, name);
      self.convert(file, outFile, next);
    }, function (err) {
      callback(err);
    });
  });
}
IconvBat.prototype.convertDirectory = convertDirectory;

function convert(file, outFile, callback) {
  if (arguments.length < 3) {
    callback = outFile;
    outFile = null;
  }
  if (!outFile) {
    outFile = file;
  }
  if (fs.statSync(file).isDirectory()) {
    this.convertDirectory(file, outFile, callback);
  } else {
    this.convertFile(file, outFile, callback);
  }

}
IconvBat.prototype.convert = convert;

module.exports = IconvBat;
