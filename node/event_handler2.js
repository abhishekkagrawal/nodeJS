const EventEmitter = require('events');
const Logger = require('./logging');
const logger = new Logger();

logger.on('messageLogged',

(arg)=>{
    console.log("Listener is called!!",arg);
}
);

logger.log('--logged message!--');