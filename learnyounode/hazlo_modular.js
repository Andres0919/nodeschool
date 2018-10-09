var modulo = require('./modulo');

var arg = process.argv;
modulo(arg[2], arg[3], function (error, data) {
   data.forEach(file => {
        console.log(file);
   });
});