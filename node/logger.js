var url = 'https://www.google.com';
function log(message){
    console.log(message);
}

//module.exports.log=log;
//module.exports.endPoint=url;

//If we want export only one function then just provide the name in exports
module.exports=log;

console.log(module);