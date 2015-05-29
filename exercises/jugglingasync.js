var http = require("http");

var claStart = 2;
var collectedData = [ "", "", ""];
var amountOfData = 0;

var collect = function(url, order){
  http.get(url, function(response){
    response.on("error", console.error);
    response.on("data", function(data){
      collectedData[order] += data.toString();
    });
    response.on("end", function(end){
      amountOfData++;
      if(amountOfData == 3){
        printData();
      }
    });
  });
}

var printData = function() {
  for (var i = 0; i < collectedData.length; i++) {
    console.log(collectedData[i]);
  }
}

for (var i = claStart; i < process.argv.length; i++) {
  collect(process.argv[i], i - claStart);
}
