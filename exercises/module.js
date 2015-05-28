module.exports = function (fpath, extFilter, callback) {
  var fs = require("fs");
  var path = require("path");
  extFilter = "." + extFilter;

  fs.readdir(fpath, function(err, list) {
    if(err)
      return callback(err); //file was not found

    var newList = [];
    for (var i = 0, j = 0; i < list.length; i++) {
      if(extFilter === path.extname(list[i])){
        newList[j++] = list[i];
      }
    }
    callback(null, newList);
  });
}
