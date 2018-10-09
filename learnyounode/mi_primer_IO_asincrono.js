var fs = require('fs');

fs.readFile(process.argv[2] ,function callback(error, data){
    if(error === null){
        lineas = data.toString().split('\n').length -1;
    }
    console.log(lineas)
});