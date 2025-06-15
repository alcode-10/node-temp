//option of interacting with file system and module
//two methods of fs module
//1->Asynchronus non blocking
//2->Synchronus blocking


//synchronus
const {readFileSync,writeFileSync, write} = require('fs');
//this is destructuring mthods out of the file module
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//this will read file fully and then proceed
console.log(first,second)
//now creating a file or writing to a file,text content
writeFileSync('./content/result-sync.text',`here is the result : ${first}, ${second}`,{ flag :'a' });//always overwritten values
//here flag appends the values at the end