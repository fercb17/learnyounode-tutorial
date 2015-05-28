var bl = require("bl");
var http = require("http");

var collect = function(url) {
  http.get(url, function(response) {
    response.on("error", function() {
      if(error)
        return console.error(error);
    });
    response.pipe(bl(function (err, data){
      if(err)
        return console.error(err);
      
      console.log(data.length);
      console.log(data.toString());
    }));
  });
}

collect(process.argv[2]);
