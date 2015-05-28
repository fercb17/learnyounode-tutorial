var fs = require("fs");
var path = require("path");

var extFilter = "." + process.argv[3];  

function ondirectoryloaded (err, list) {
  for (var i = 0; i < list.length; i++) {
    if (extFilter === path.extname(list[i]))
      console.log(list[i]);
  }
}

fs.readdir(process.argv[2], ondirectoryloaded);
