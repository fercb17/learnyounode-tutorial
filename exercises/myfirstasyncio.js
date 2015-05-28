var fs = require("fs");

function onfileloaded (err, data)
{
  console.log(data.toString().split("\n").length - 1);
}

fs.readFile(process.argv[2], onfileloaded);
