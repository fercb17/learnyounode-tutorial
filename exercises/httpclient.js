var http = require("http");

var getWebSiteData = function(url) {
  http.get(url, function(response) {
    response.setEncoding("utf-8");
    response.on("data", console.log);
    response.on("error", function(error) {console.error; });
  });
}

getWebSiteData(process.argv[2]);
