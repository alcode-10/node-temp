const { BlockList } = require('net')
//use of util package
//Converts a callback-based function into one that returns a Promise — so you can use it with async/await.
const util = require('util')
const { readFile, writeFile } = require('fs') 
const read=util.promisify(readFile)
const write=util.promisify(writeFile)
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

//remember whenever your are using async await,us try
//catch block and wrap functions inside
//more cleaner approach,no nested callbacks
const start = async ()=>{//declare the function as async
   try{
    const second = await read('./content/second.txt','utf8');
    const first = await read('./content/first.txt','utf8');//will execute only when promise is resolved
    await write('./content/read-mind-grenade.txt','hey cutieeee')
    console.log(first,second)
    //console.log(second)
   }
   catch(err){
   console.log(error)
   }
}
start();

