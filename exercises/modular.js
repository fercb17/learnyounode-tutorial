var myModule = require("./module");

var filteredList = myModule(process.argv[2], process.argv[3], function(error, data) {
  if(error)
    return console.error("There was an error:", error);

  //for (var i = 0; i < data.length; i++) {
  //  console.log(data[i]);
  //}

  for (var file of data) {
    console.log(file);
  }

});
