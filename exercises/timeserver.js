var net = require("net");

var server = net.createServer(function(socket) {
  socket.end(getServerTime() + "\n")
});
server.listen(process.argv[2]);

function format(num) {
  if(num > 9)
    return "" + num;
  else
    return "0" + num;
};

function getServerTime() {
  return year + "-" + month + "-" + day + " " + hour + ":" + min;
};


var date = new Date();
var year = date.getFullYear();
var month = format(date.getMonth() + 1);
var day = format(date.getDate());
var hour = format(date.getHours());
var min = format(date.getMinutes());
