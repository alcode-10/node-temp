console.log('first task')//sync one
setTimeout(() =>{//async one,they get offloaded
    console.log('hey')
},0);
console.log('second task')//sync one