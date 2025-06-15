const path = require ('path');
//seprator property
console.log(path.sep)

//too join the paths
//we use join methods
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)//give the path of the destination file

const base = path.basename(filePath);
console.log(base)//returns the destination folder

//this recieves a sequence of paths and multiple path and resolves them to return the ultimate path(original)
const absolutepath= path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolutepath)
//this is useful for when application runs in different machines