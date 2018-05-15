// import { log } from "./logger";
// log('Logging message from app');

var logger = require('./logger');
//logger.log('Logging message from app');

//Changed to function from object
logger('Logging message from app');

console.log(logger);