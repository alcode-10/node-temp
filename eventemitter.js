//events in nodejs
const eventemitter=require('events')

const customemitter = new eventemitter()

//on is for listening to an event
//we can have multiple on methods
customemitter.on('response',(name,id)=>{//whenevent takes place,call function runs
  console.log(`data recieved with name ${name} and ${id}`)
})
//after the event is done
customemitter.emit('response','riya',21);

//emit is for emitting an event
//building block of node and many built in modules rely on them
//always first listen for an event and then emit it