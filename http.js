//http
const http = require('http');
const  server = http.createServer((req,res) =>{
    //creating a server,req and res are object
    //console.log(req)//this returns a url property whch tell what adress client is requesting
    if(req.url === '/'){
    res.end("Welcome to our home page")
    return;
    }
    if(req.url === '/about'){
    res.end("Here is short pant")
    return;
    }
    
    res.end(`<h1>  OOPS! </h1> <p>We can't see to find your page</p>
        <a href ="/" > back to home page</a>`)
//Always make sure res.end() is called only once per request.
//warna fall through ho jaega
});
server.listen(5000)//port specification
//web-servers,they keep on listening for request