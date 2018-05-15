function sayHello(data){
    console.log('Hello World '+data);
}
sayHello('of earth');

global.console.log('From Globe!');

var message='hello message';
//Below line will give error as UNDEFINED, 
//above variable is not under Global scope it is under File local scope
//console.log(global.message);

console.log('-------------------------------');
console.log(module);