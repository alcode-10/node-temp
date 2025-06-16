//console.log('first task')//sync one
setInterval(() =>{//async one,they get offloaded,runs every two second
    console.log('hey')
},2000);
console.log('second task')//sync one