var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    //This creates a stream to read the file chunk by chunk.
    //✔️ When the file is ready to be read:
//pipe() sends the data in chunks directly into the response stream (res).
//This is fast and memory-efficient, especially for big files.
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)

  //server par request bhejna
  //pipe is pushing from read stream to write stream in chunks