# iconv-bat

Convert file/directory between encodings.

## Usage

### CLI Tool

```sh
npm install -g iconv-bat
iconv-bat -f gbk -t utf-8 path/to/directory output/to/directory
iconv-bat path/to/directory output/to/directory
iconv-bat path/to/directory
```

### In Node

```js
var IconvBat = require('iconv-bat');
var iconvBat = new IconvBat('gbk', 'utf-8');
iconvBat.convertFile('path/to/file', 'output/to/file', callback);
iconvBat.convertFile('path/to/file', callback);
iconvBat.convertDirectory('path/to/directory', 'output/to/directory', callback);
iconvBat.convertDirectory('path/to/directory', callback);
```
