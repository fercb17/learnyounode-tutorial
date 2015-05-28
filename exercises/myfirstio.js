var fs = require("fs");

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();

var nLines = str.split("\n");
console.log(nLines.length - 1);
