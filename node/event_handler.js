const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.addListener('messageLogged',function(){
//     emitter.addListener('messageLogged',function(arg){
//         console.log('Listener is called!!',arg);
//     });
// });

emitter.on('messageLogged',

(arg)=>{
    console.log("Listener is called!!",arg);
}
);

emitter.emit('messageLogged',{id:1,url:'www.google.com'});