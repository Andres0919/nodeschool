var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
    ext = '.'+ext;

    fs.readdir(dir, function (err, data) {
       if(err) return callback(err);

       data = data.filter(file => {
            if (path.extname(file) === ext) {
                return true;
            }else{
                return false
            }
       });

       callback(null, data);
    });
};