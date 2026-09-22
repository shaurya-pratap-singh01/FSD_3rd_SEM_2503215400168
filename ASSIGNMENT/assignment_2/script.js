const Events = require('events');
const emitter = new Events();

emitter.on('login',(name)=>{
    console.log(`${name} Login Successfully.`);
})

emitter.on('Assignment', ()=>{
    console.log("Assignment Submitted.");
})

emitter.on('logout',()=>{
    console.log("Student Logged Out.");
})

emitter.on('exit', ()=>{
    console.log("Existing application.")
})


emitter.emit('login','Shaurya')
emitter.emit('Assignment')
emitter.emit('logout')
emitter.emit('exit')