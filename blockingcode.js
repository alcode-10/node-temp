//async patterns
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  }

  else if (req.url === '/about') {//this code will take time thus blocking the user,it s=is sync thats why we need to use async so that
    //such tasks get offloaded
    // BLOCKING CODE !!!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}-${j}`);
      }
    }
}
    else
    res.end('About Page');
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000...');
});
