//var a =;
//Above line will give error and is added delibrately to check 
//that exports, require, module, __filename, __dirname are functions inside global function

var path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);

var os=require('os');
var totalMemory=os.totalmem;
var freeMemory=os.freemem;
console.log('Total Memory:'+totalMemory);
console.log('Free Memory:'+freeMemory);

