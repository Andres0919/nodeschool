var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.'+process.argv[3];

fs.readdir(dir, function callback(error, data) {
    data.forEach((file) => {    
        if(path.extname(file) === ext){
            console.log(file);
        }
    });
})