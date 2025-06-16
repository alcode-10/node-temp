const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })//invoked everytime someone visits our server

// Using Event Emitter API
const server = http.createServer()//on and emit included in http module
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)