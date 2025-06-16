const { createReadStream }=require('fs')

//default:64kb
//last buffer-remainder
//highwatermark - control size
//const stream = createReadStream(path,{highwatermark:9000})
//const stream = createReadStream(path,{encoding :'utf8'})
const stream = createReadStream('./content/big.txt',{
  highWaterMark : 90000,
  encoding : 'utf8',
})
stream.on('data',(result)=>{//
  console.log(result)
})

stream.on('error',(err)=>{//error property
  console.log(err)
})
