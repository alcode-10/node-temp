const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result) =>{
    if(err)
    {
        console.log(err)
        return;
    }
    const first=result;//pehla item jo write karna h
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
    {
        console.log(err)
        return;
    }
    const second =result;//dusra jo write karna h
    writeFile('./content/result-async.txt',
        `here is the result :${first},${second}`
    ,(err,result) =>{
        if(err)
        {
            console.log(err)
            return;
        }
        console.log(result);
    })

    })

})//provide the encoding so that you dont get the buffer value