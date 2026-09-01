const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Register by .on (listener) an event listener for the 'event' event
myEmitter.on('greet',(name) => {
    console.log(`Hello, ${name}! Welcome to the event-driven world of Node.js.`);
})

myEmitter.on('exit', () => {
    console.log('Goodbye! Thanks for using the event-driven world of Node.js.');
});

// Emit (TRIGGER) the 'greet' event with a name
myEmitter.emit('greet', 'dev');
// Emit the 'exit' event
myEmitter.emit('exit');

