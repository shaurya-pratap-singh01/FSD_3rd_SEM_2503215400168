//experiment 1
const {EventEmitter} = require('events');

class Button extends EventEmitter {}

const button = new Button();

button.on('click', () => {
    console.log('button clicked');
});

button.on('mouseover', () => {
    console.log('Mouse is over the button');
});

button.emit('click');
button.emit('mouseover');