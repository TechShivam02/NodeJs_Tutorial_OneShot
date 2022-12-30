const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please turn OFF the motor ');

  setTimeout(() => {
    console.log("Please turn off the Motor , calling 2nd time , after settiemout   BYE ....   ");
  }, 3000);


});

console.log("The Script is runnig ");

myEmitter.emit('Waterfull');

console.log("The Script is Still runnig ");

