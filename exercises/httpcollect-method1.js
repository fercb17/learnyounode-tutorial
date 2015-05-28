var http = require("http");
var collectedData = "";

var output = function(str) {
  console.log(str.length);
  console.log(str);
}

var collect = function(url) {
  if(url.length <= 0) console.error;
  http.get(url, function(response){
    response.on("data", function(data) {
      //console.log("data event fired");
      collectedData += data.toString();
    });
    response.on("error", console.error);
    response.on("end", function(end){
      output(collectedData);
    });
  });
}

collect(process.argv[2]);
