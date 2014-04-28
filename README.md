# iconv-bat

Convert file/directory between encodings.

## Usage

### CLI Tool

```sh
npm install -g iconv-bat
iconv-bat -f gbk -t utf-8 -r path/to/directory output/to/directory
iconv-bat -r path/to/directory output/to/directory
iconv-bat -r path/to/directory
iconv-bat path/to/file
```

### In Node

```js
var IconvBat = require('iconv-bat');
var iconvBat = new IconvBat('gbk', 'utf-8');
iconvBat.convertFile('path/to/file', 'output/to/file', callback);
iconvBat.convertFile('path/to/file', callback);
iconvBat.convertDirectory('path/to/directory', 'output/to/directory', callback);
iconvBat.convertDirectory('path/to/directory', callback);
iconvBat.convert('path/to/file', callback);
iconvBat.convert('path/to/directory', callback);
```
