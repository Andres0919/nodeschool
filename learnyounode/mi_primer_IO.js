var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lineas = str.split('\n');

console.log(lineas.length -1);